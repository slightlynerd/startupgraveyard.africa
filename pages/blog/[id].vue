<template>
  <article
    :style="{ marginBottom: !isMobile ? `${blogContentHeight}px` : 0 }"
  >
    <img
      class="blog-image"
      :src="
        blogDetails?.headerImage
          ? blogDetails.headerImage.url
          : '/graveyard.jpeg'
      "
      :alt="blogDetails?.headerImage?.alt || blogDetails?.title"
    >
    <div ref="blogContentRef" class="blog-container">
      <h1 class="mb-3">
        {{ blogDetails?.title }}
      </h1>
      <p class="small mb-0">
        Written By: <span class="text-muted">{{ blogDetails?.author }}</span>
      </p>
      <p class="small mb-3">
        <time :datetime="datetime">
          Published on:
          <span class="text-muted">{{ blogDetails?.createdAt }}</span>
        </time>
      </p>
      <div
        class="content"
        v-html="sanitizeHtmlContent(blogDetails?.bodyContent)"
      />
      <h6 class="mt-5">
        Share this article
      </h6>
      <share-blog :blog-date="blogDetails" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { doc, getDoc } from 'firebase/firestore';
import { format } from 'date-fns';
import sanitizeHtml from 'sanitize-html';

// stores
import { useBlogStore } from '~/stores/blog';

// models
import {
  FirestoreCollection,
  SANITIZE_HTML_OPTIONS,
  type IBlog,
  MD_BREAKPOINT
} from '~/models';

// utils
import { capitalizeTexts } from '~/utils';

// common
const { $firestore } = useNuxtApp();
const route = useRoute();
const blogStore = useBlogStore();

// refs
const blogContentRef = ref<HTMLElement | undefined>();
const blogDetails = ref<IBlog | undefined>();
const blogContentHeight = ref<number | undefined>(
  blogContentRef.value?.offsetHeight
);
const datetime = ref<string>();
const isMobile = ref<boolean>(false);

// methods
function sanitizeHtmlContent (content?: string): string {
  return content ? sanitizeHtml(content, SANITIZE_HTML_OPTIONS) : '';
}

function onResize (): void {
  isMobile.value = window.innerWidth <= MD_BREAKPOINT;
  blogContentHeight.value = blogContentRef.value?.offsetHeight;
}

// lifecycle hooks
onMounted(async () => {
  // fetch article
  const articleRef = doc(
    $firestore,
    FirestoreCollection.Blog,
    route.params.id.toString()
  );
  blogStore.setLoading(true);
  try {
    const articleSnap = await getDoc(articleRef);
    if (articleSnap.exists()) {
      blogDetails.value = {
        ...articleSnap.data(),
        createdAt: format(
          new Date(articleSnap.data()?.createdAt.toDate()),
          'MMMM d, yyyy'
        )
      } as IBlog;
      datetime.value = new Date(
        articleSnap.data()?.createdAt.toDate()
      ).toISOString();
    }
    nextTick(() => {
      // TODO: add styles to fix footer to bottom of article to replace workaround
      blogContentHeight.value = blogContentRef.value?.offsetHeight;
    });
  } catch (error) {
    // TODO: handle error
  } finally {
    blogStore.setLoading(false);
  }

  // set initial mobile state
  onResize();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

useHead({
  title: `${capitalizeTexts(
    route.params.id?.toString().replaceAll('-', ' ') || ''
  )} | Startup Graveyard`,
  script: [{ src: 'https://platform.twitter.com/widgets.js' }]
});
</script>

<style lang="scss" scoped>
article {
  position: relative;

  .blog-image {
    width: 100%;
    max-height: 24rem;
    object-fit: cover;
  }

  .blog-container {
    position: absolute;
    top: 20rem;
    max-width: 60%;
    background-color: $sg-secondary-color;
    padding: 3rem;
    margin-left: 2rem;

    @media screen and (max-width: 768px) {
      position: initial;
      max-width: 100%;
      margin-left: 0;
      padding: 2rem;
    }

    @media screen and (max-width: 600px) {
      padding: 1rem;
    }

    .content {
      p,
      img {
        margin-bottom: 1rem;
      }

      :deep(img) {
        max-width: 100%;
        height: 24rem;
        object-fit: contain;
      }
    }
  }
}
</style>
