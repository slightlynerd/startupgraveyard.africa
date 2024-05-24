<template>
  <div class="col-md-8">
    <img
      class="author-image mb-3"
      :src="author?.photoURL || 'https://placehold.co/200'"
      :alt="`photo of ${author?.firstName} ${author?.lastName}`"
    >
    <h1>{{ author?.firstName }} {{ author?.lastName }}</h1>
    <p class="lead mt-3">
      {{ author?.bio }}
    </p>
    <div class="text-muted mt-3">
      <social-icons
        position="start"
        :facebook="author?.facebook"
        :x="author?.x"
        :linkedin="author?.linkedIn"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// models
import { type IAuthor } from '@/models';

// props
defineProps<{
  author?: IAuthor;
}>();
</script>

<style lang="scss" scoped>
.author-image {
  border-radius: 50%;
}
</style>
