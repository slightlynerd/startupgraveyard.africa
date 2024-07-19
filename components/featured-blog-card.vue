<template>
  <div class="card border-0 shadow-0 rounded-0">
    <div class="row align-items-center">
      <div class="col-sm-6">
        <router-link :to="blog?.id ? `/blog/${blog.id}` : '/blog'">
          <img
            class="image"
            :src="blog?.headerImage ? blog.headerImage.url : '/graveyard.jpeg'"
            :alt="blog?.headerImage?.alt || blog?.title"
          >
        </router-link>
      </div>
      <div class="col-sm-6">
        <div class="py-4 px-3 px-md-0">
          <h3 class="h5 fw-bold">
            {{ blog?.title }}
          </h3>
          <p class="text-muted text-xs mb-1">
            {{ blog?.createdAt }}
          </p>
          <p
            v-if="!hideDescription"
            class="mt-2"
            v-html="truncateText(blog?.bodyContent, truncateTextLength)"
          />
          <router-link
            class="btn d-inline-block mt-4 text-uppercase"
            :to="blog?.id ? `/blog/${blog.id}` : '/blog'"
          >
            Read More
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// models
import { type IBlog } from '~/models';

// utils
import { truncateText } from '~/utils';

// props
defineProps<{
  blog?: IBlog;
  hideDescription?: boolean;
}>();

const truncateTextLength = 150;
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
