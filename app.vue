<template>
  <div>
    <app-header />
    <main class="container">
      <NuxtPage />
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts" setup>
import { useBlogStore } from './stores/blog';

// common
const blogStore = useBlogStore();

blogStore.fetchConfig();
</script>

<style lang="scss">
@import '~/assets/styles/main.scss';
</style>
