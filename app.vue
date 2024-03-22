<template>
  <div>
    <client-only>
      <loading-indicator
        v-model:active="isLoading"
        :is-full-page="true"
        :opacity="0.9"
      />
    </client-only>
    <app-header />
    <main class="container">
      <NuxtPage />
    </main>
    <app-footer />
  </div>
</template>

<script lang="ts" setup>
import LoadingIndicator from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { storeToRefs } from 'pinia';

// stores
import { useBlogStore } from './stores/blog';

// common
const blogStore = useBlogStore();

// refs
const { isLoading } = storeToRefs(blogStore);

// lifecycle hooks
onMounted(() => {
  blogStore.fetchConfig();
});
</script>

<style lang="scss">
@import '~/assets/styles/main.scss';
</style>
