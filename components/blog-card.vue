<template>
  <div class="card border-0 shadow-0 rounded-0">
    <img src="/graveyard.jpeg" alt="graveyard">
    <div class="p-4">
      <h3 class="h5">
        {{ blog?.title }}
      </h3>
      <p v-if="!hideDescription" v-html="truncateText(blog?.bodyContent, recentPostTruncateLength)" />
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

// constants
const recentPostTruncateLength = RECENT_POST_TRUNCATE_LENGTH;
</script>
