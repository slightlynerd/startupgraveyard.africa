<template>
  <div class="startup-card px-3 py-4">
    <h2 class="h6">
      {{ startup.name }}
    </h2>
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
        class="btn d-inline-block text-uppercase"
        target="_blank"
        :href="`${startup.newsSource}?referrer=startupgraveyard.africa`"
        @mousedown="handleReadMore"
        @touchstart="handleReadMore"
      >
        Learn More
      </a>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { getAnalytics, logEvent } from 'firebase/analytics';

// models
import { type IStartup } from '~/models';

// props
const props = defineProps<{
  startup: IStartup;
}>();

// methods
function handleReadMore (): void {
  if (process.env.NODE_ENV !== 'development') {
    const analytics = getAnalytics();
    logEvent(analytics, 'startup_link_clicked', {
      startup_name: props.startup.name
    });
  }
}
</script>

<style lang="scss" scoped>
.startup-card {
  background-color: $sg-secondary-color;
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
