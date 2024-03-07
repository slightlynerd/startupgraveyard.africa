<template>
  <div class="startup-card px-3 py-4">
    <a target="_blank" :href="startup.newsSource">
      <h2 class="h6">{{ startup.name }}</h2>
    </a>
    <div class="d-flex align-items-center justify-content-between">
      <div class="col mt-2">
        <p class="shutdown text-muted">
          Shutdown: <span class="text-danger">{{ startup.shutdownDate }}</span>
        </p>
      </div>
      <div class="col mt-2">
        <p class="text-muted text-end">
          Raised: <span class="text-success">{{ startup.raised }}</span>
        </p>
      </div>
    </div>
    <div class="description mt-2">
      <p>
        Founded in {{ startup.founded }}.
        {{ startup.description }}
      </p>
      <p class="text-muted  mt-2">
        Countries: {{ startup.location }}
      </p>
    </div>
    <p class="d-flex justify-content-end mt-3">
      <a
        class="btn d-inline-block"
        target="_blank"
        :href="startup.newsSource"
      >
        READ MORE
      </a>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// models
import { type IStartup } from '~/models';

// props
defineProps<{
  startup: IStartup;
}>();
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.startup-card {
  background-color: $sg-secondary-color;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  .h6 {
    display: inline-block;
  }

  .description {
    min-height: 7.5rem;
  }
}
</style>
