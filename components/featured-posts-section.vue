<template>
  <section class="mt-5">
    <h1 class="h6 text-uppercase fw-bold mb-3">
      Featured Posts
    </h1>

    <template v-if="posts?.length > 0">
      <div class="row">
        <div
          v-for="item in posts"
          :key="item.id"
          class="col-lg-6 mb-4"
        >
          <featured-blog-card :blog="item" />
        </div>
      </div>
    </template>
  </section>
</template>

<script lang="ts" setup>
// models
import { type IBlog } from '@/models';

// props
defineProps<{
  posts: IBlog[];
}>();
</script>
