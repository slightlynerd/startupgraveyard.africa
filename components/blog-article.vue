<template>
  <div>
    <h1 class="mb-3">
      {{ blogData?.title }}
    </h1>
    <p class="mb-0">
      Written By: <span class="text-muted">{{ blogData?.author }}</span>
    </p>
    <p class="mb-3">
      <time :datetime="datetime">
        Published on:
        <span class="text-muted">{{ blogData?.createdAt }}</span>
      </time>
    </p>
    <div class="content" v-html="sanitizeHtmlContent(blogData?.bodyContent)" />
  </div>
</template>

<script setup lang="ts">
import sanitizeHtml from 'sanitize-html';

// models
import { type IBlog, SANITIZE_HTML_OPTIONS } from '~/models';

// props
defineProps<{
  blogData?: IBlog;
  datetime?: string;
}>();

// methods
function sanitizeHtmlContent (content?: string): string {
  return content ? sanitizeHtml(content, SANITIZE_HTML_OPTIONS) : '';
}
</script>

<style lang="scss" scoped>
.content {
  p,
  img {
    margin-bottom: 1rem;
  }

  :deep(img) {
    max-width: 100%;
    height: 24rem;
    object-fit: contain;
  }

  :deep(p) {
    margin-bottom: 1rem;
    font-size: 1.15rem;
  }

  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
