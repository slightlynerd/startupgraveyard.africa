<template>
  <div class="card border-0 shadow-0 rounded-0">
    <router-link :to="blog?.id ? `/blog/${blog.id}` : '/blog'">
      <img
        class="image"
        :src="blog?.headerImage ? blog.headerImage.url : '/graveyard.jpeg'"
        :alt="blog?.headerImage?.alt || blog?.title"
      >
    </router-link>
    <div class="p-4">
      <h3 class="h5 fw-bold">
        {{ blog?.title }}
      </h3>
      <p class="text-muted text-xs mb-2">
        {{ blog?.createdAt }}
      </p>
      <p
        v-if="!hideDescription"
        v-html="truncateText(blog?.bodyContent, RECENT_POST_TRUNCATE_LENGTH)"
      />
      <router-link
        class="btn d-inline-block mt-4 text-uppercase"
        :to="blog?.id ? `/blog/${blog.id}` : '/blog'"
      >
        Read More
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
// models
import { type IBlog, RECENT_POST_TRUNCATE_LENGTH } from '~/models';

// utils
import { truncateText } from '~/utils';

// props
defineProps<{
  blog?: IBlog;
  hideDescription?: boolean;
}>();
</script>

<style lang="scss" scoped>
.card {
  .image {
    width: 100%;
    height: 22.5rem;
    object-fit: cover;
  }
}
</style>
