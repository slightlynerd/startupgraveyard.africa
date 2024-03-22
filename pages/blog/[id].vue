<template>
  <article :style="{ marginBottom: `${blogContentHeight}px` }">
    <img src="/graveyard.jpeg" alt="graveyard" class="blog-image">
    <div ref="blogContentRef" class="blog-container">
      <h1 class="mb-3">
        {{ blogDetails?.title }}
      </h1>
      <p class="small mb-0">
        Written By: <span class="text-muted">{{ blogDetails?.author }}</span>
      </p>
      <p class="small mb-3">
        <time :datetime="datetime">
          Published on: <span class="text-muted">{{ blogDetails?.createdAt }}</span>
        </time>
      </p>
      <div class="content" v-html="sanitizeHtmlContent(blogDetails?.bodyContent)" />
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
import { FirestoreCollection, SANITIZE_HTML_OPTIONS, type IBlog } from '~/models';

// common
const { $firestore } = useNuxtApp();
const route = useRoute();
const blogStore = useBlogStore();

// refs
const blogContentRef = ref<HTMLElement | undefined>();
const blogDetails = ref<IBlog | undefined>();
const blogContentHeight = ref<number | undefined>(blogContentRef.value?.offsetHeight);
const datetime = ref<string>();

// methods
function sanitizeHtmlContent (content?: string): string {
  return content ? sanitizeHtml(content, SANITIZE_HTML_OPTIONS) : '';
}

// lifecycle hooks
onMounted(async () => {
  // fetch article
  const articleRef = doc($firestore, FirestoreCollection.Blog, route.params.id.toString());
  blogStore.setLoading(true);
  try {
    const articleSnap = await getDoc(articleRef);
    if (articleSnap.exists()) {
      blogDetails.value = {
        ...articleSnap.data(),
        createdAt: format(new Date(articleSnap.data()?.createdAt.toDate()), 'MMMM d, yyyy')
      } as IBlog;
      datetime.value = new Date(articleSnap.data()?.createdAt.toDate()).toISOString();
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
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

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
      position: relative;
      top: 0;
      max-width: 100%;
      margin-left: 0;
    }

    .content {
      p, img {
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
