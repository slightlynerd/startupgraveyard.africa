<template>
  <article :style="{ marginBottom: `${blogContentHeight}px` }">
    <img src="/graveyard.jpeg" alt="graveyard" class="blog-image">
    <div ref="blogContentRef" class="blog-content">
      <h1 class="mb-3">
        {{ blogData?.title }}
      </h1>
      <p class="small mb-0">
        Written By: <span class="text-muted">{{ blogData?.author }}</span>
      </p>
      <p class="small mb-3">
        <time datetime="2022-03-01">
          Published on: <span class="text-muted">March 1, 2022</span>
        </time>
      </p>
      <div v-html="blogData?.bodyContent" />
      <h6 class="mt-5">
        Share this article
      </h6>
      <share-blog :blog-date="blogData" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { doc, getDoc } from 'firebase/firestore';
import { format } from 'date-fns';

// models
import { FirestoreCollections, type IBlog } from '~/models';

// common
const { $firestore } = useNuxtApp();
const route = useRoute();

// refs
const blogContentRef = ref<HTMLElement | undefined>();
const blogData = ref<IBlog | undefined>();
const blogContentHeight = ref<number | undefined>(blogContentRef.value?.offsetHeight);

// lifecycle hooks
onMounted(async () => {
  // fetch article
  const articleRef = doc($firestore, FirestoreCollections.Blog, route.params.id.toString());
  const articleSnap = await getDoc(articleRef);
  if (articleSnap.exists()) {
    blogData.value = {
      ...articleSnap.data(),
      createdAt: format(new Date(articleSnap.data()?.createdAt.toDate()), 'MMMM d, yyyy')
    } as IBlog;
  }
  nextTick(() => {
    blogContentHeight.value = blogContentRef.value?.offsetHeight;
  });
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

  .blog-content {
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

    p, img {
      margin-bottom: 1rem;
    }

    :deep(img) {
      max-width: 100%;
      max-height: 24rem;
      object-fit: contain;
    }
  }
}
</style>
