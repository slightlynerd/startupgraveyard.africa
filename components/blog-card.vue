<template>
  <div class="card border-0 shadow-0">
    <img src="/graveyard.jpeg" alt="graveyard">
    <div class="p-4">
      <h3>
        {{ blog?.title }}
      </h3>
      <p v-html="truncateText(blog?.bodyContent, recentPostTruncateLength)" />
      <router-link
        class="btn d-inline-block mt-4"
        :to="blog?.id ? `/blog/${blog.id}` : '/blog'"
      >
        READ MORE
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
}>();

// constants
const recentPostTruncateLength = RECENT_POST_TRUNCATE_LENGTH;
</script>

<style lang="scss" scoped>

</style>
