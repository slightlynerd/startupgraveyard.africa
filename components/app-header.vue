<template>
  <nav class="container">
    <div class="d-flex justify-content-between py-3">
      <router-link class="text-center text-uppercase fw-bold h5 mb-0" to="/">
        💀 startupgraveyard.africa
      </router-link>
      <router-link v-if="showBlog" to="/blog">
        Blog
      </router-link>
    </div>
    <hr class="my-0 pt-0 mb-4">
  </nav>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

// stores
import { useBlogStore } from '@/stores/blog';

// common
const blogStore = useBlogStore();

// refs
const { config } = storeToRefs(blogStore);

// computed
const showBlog = computed(() =>
  process.env.NODE_ENV === 'development'
    ? config.value.testShowBlog
    : config.value.showBlog
);
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

hr {
  border: none;
  border-bottom: 1px solid $sg-placeholder-color;
}
</style>
