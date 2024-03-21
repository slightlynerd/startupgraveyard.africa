<template>
  <div class="featured-blog row align-items-center gx-0">
    <div class="col-12 col-lg-4">
      <img src="/graveyard.jpeg" alt="graveyard" class="featured-image">
    </div>
    <div class="col-12 col-lg-8 p-4">
      <div class="featured-info">
        <h2 class="h1">
          {{ blog?.title }}
        </h2>
        <p v-html="truncateText(blog?.bodyContent, featuredPostTruncateLength)" />
        <router-link
          class="btn d-inline-block mt-4"
          :to="blog?.id ? `/blog/${blog.id}` : '/blog'"
        >
          READ MORE
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// models
import { type IBlog, FEATURED_POST_TRUNCATE_LENGTH } from '~/models';

// utils
import { truncateText } from '~/utils';

// props
defineProps<{
  blog?: IBlog;
}>();

// constants
const featuredPostTruncateLength = FEATURED_POST_TRUNCATE_LENGTH;
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.featured-blog {
  background-color: $sg-secondary-color;
}

.featured-image {
  width: 100%;
  max-height: 24rem;
  object-fit: cover;
}

.featured-info {
  max-width: 80%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
}
</style>
