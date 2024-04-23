<template>
  <article
    :style="{ marginBottom: !isMobile ? `${blogContentHeight}px` : 0 }"
  >
    <img
      v-if="blogData?.data.headerImage"
      class="blog-image"
      :src="blogData.data.headerImage.url"
      :alt="blogData?.data.headerImage?.alt || blogData?.data.title"
    >
    <div ref="blogContentRef" class="blog-container">
      <h1 class="mb-3">
        {{ blogData?.data.title }}
      </h1>
      <p class="mb-0">
        Written By: <span class="text-muted">{{ blogData?.data.author }}</span>
      </p>
      <p class="mb-3">
        <time :datetime="datetime">
          Published on:
          <span class="text-muted">{{ blogData?.data.createdAt }}</span>
        </time>
      </p>
      <div
        class="content"
        v-html="sanitizeHtmlContent(blogData?.data.bodyContent)"
      />
      <h6 class="mt-5">
        Share this article
      </h6>
      <share-buttons :blog-data="blogData?.data" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { doc, getDoc } from 'firebase/firestore';
import { format } from 'date-fns';
import sanitizeHtml from 'sanitize-html';

// models
import {
  FirestoreCollection,
  SANITIZE_HTML_OPTIONS,
  type IBlog,
  MD_BREAKPOINT,
  META_DESCRIPTION_LENGTH
} from '~/models';

// common
const { $firestore } = useNuxtApp();
const route = useRoute();

// refs
const blogContentRef = ref<HTMLElement | undefined>();
const blogContentHeight = ref<number | undefined>(
  blogContentRef.value?.offsetHeight
);
const datetime = ref<string>();
const isMobile = ref<boolean>(false);
const metaDescription = ref<string>('');

// methods
function sanitizeHtmlContent (content?: string): string {
  return content ? sanitizeHtml(content, SANITIZE_HTML_OPTIONS) : '';
}

function onResize (): void {
  isMobile.value = window.innerWidth <= MD_BREAKPOINT;
  blogContentHeight.value = blogContentRef.value?.offsetHeight;
}

// fetch blog data
const { data: blogData } = await useAsyncData(route.params.id.toString(), async () => {
  const articleRef = doc(
    $firestore,
    FirestoreCollection.Blog,
    route.params.id.toString()
  );
  let blog: IBlog | undefined;
  try {
    const articleSnap = await getDoc(articleRef);
    if (articleSnap.exists()) {
      blog = {
        ...articleSnap.data(),
        createdAt: format(
          new Date(articleSnap.data()?.createdAt.toDate()),
          'MMMM d, yyyy'
        )
      } as IBlog;
      datetime.value = new Date(
        articleSnap.data()?.createdAt.toDate()
      ).toISOString();
      metaDescription.value = `${sanitizeHtml(blog.bodyContent, {
        allowedTags: []
      }).substring(0, META_DESCRIPTION_LENGTH)}... ${blog.title}`;
      return {
        data: { ...blog }
      };
    }
  } catch (error) {
    // TODO: handle error
  }
});

// lifecycle hooks
onMounted(() => {
  nextTick(() => {
    // TODO: add styles to fix footer to bottom of article to replace this workaround
    blogContentHeight.value = blogContentRef.value?.offsetHeight;
  });

  // set initial mobile state
  onResize();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

useHead({
  title: blogData.value?.data.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: metaDescription.value
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: blogData.value?.data.title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: metaDescription.value
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: blogData.value?.data.headerImage?.url
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `https://startupgraveyard.africa/blog/${route.params.id}`
    },
    {
      name: 'author',
      content: blogData.value?.data.author
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:url',
      content: 'https://twitter.com/stgr_africa'
    },
    {
      property: 'twitter:title',
      content: blogData.value?.data.title
    },
    {
      property: 'twitter:description',
      content: metaDescription.value
    },
    {
      property: 'twitter:image',
      content: blogData.value?.data.headerImage?.url
    }
  ],
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

    @media screen and (max-width: 992px) {
      max-width: 75%;
    }

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

      :deep(p) {
        margin-bottom: 1rem;
        font-size: 1.15rem;
      }
    }
  }
}
</style>
