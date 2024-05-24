<template>
  <router-link
    class="row align-items-center"
    :to="blog?.id ? `/blog/${blog.id}` : '/blog'"
  >
    <div class="col">
      <img
        class="header-image"
        :src="blog?.headerImage.url"
        :alt="blog?.headerImage.alt"
      >
    </div>
    <div class="col">
      <h2 class="h5">
        {{ blog?.title }}
      </h2>
      <p class="text-small">
        {{ truncateText(blog?.bodyContent, maxContentLength) }}
      </p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
// models
import { type IBlog } from '@/models';

// utils
import { truncateText } from '@/utils';

// props
defineProps<{
  blog?: IBlog;
}>();

const maxContentLength = 60;
</script>

<style lang="scss" scoped>
a.row {
  max-height: 10rem;

  img.header-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-right: 1rem;
  }
}
</style>
