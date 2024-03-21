<template>
  <div class="row">
    <div v-for="blog in blogs" :key="blog.id" class="col-md-4 mt-4">
      <blog-card :blog="blog" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// models
import type { IBlog } from '~/models';

defineProps<{
  blogs?: IBlog[];
}>();
</script>

<style lang="scss" scoped>

</style>
