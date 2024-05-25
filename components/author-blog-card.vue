<template>
  <router-link
    class="row align-items-center"
    :to="blog?.id ? `/blog/${blog.id}` : '/blog'"
  >
    <div class="col-lg">
      <img
        class="header-image"
        :src="blog?.headerImage.url"
        :alt="blog?.headerImage.alt"
      >
    </div>
    <div class="col-lg">
      <h2 class="h5 mt-2 mt-lg-0">
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

const maxContentLength = 65;
</script>

<style lang="scss" scoped>
a.row {
  min-height: 10rem;
  max-width: 95%;

  @media screen and (max-width: 992px){
    max-width: 100%;
  }

  img.header-image {
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }
}
</style>
