<template>
  <div class="card border-0 shadow-0">
    <img src="/graveyard.jpeg" alt="graveyard">
    <div class="p-4">
      <h3>
        {{ blog?.title }}
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt a ut.
      </p>
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
import type { IBlog } from '~/models';

defineProps<{
  blog?: IBlog;
}>();
</script>

<style lang="scss" scoped>

</style>
