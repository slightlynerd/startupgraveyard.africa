<template>
  <div class="startup-card shadow px-3 py-4">
    <a target="_blank" :href="startup.newsSource">
      <h2 class="h4">{{ startup.name }}</h2>
    </a>
    <p class="text-muted mb-1">{{ startup.location }}</p>
    <div class="row align-items-center justify-content-between">
      <div class="col">
        <p class="shutdown text-muted small">❌ {{ startup.shutdownDate }}</p>
      </div>
      <div class="col">
        <p class="text-muted text-end small">
          raised: <span class="text-success">{{ startup.raised }}</span>
        </p>
      </div>
    </div>
    <p class="description mt-2">
      Founded in {{ startup.founded }}.
      {{ startup.description }}
    </p>
    <p class="text-muted small mt-3">
      Source:
      <a
        class="text-decoration-underline"
        target="_blank"
        :href="startup.newsSource">
        {{ startup.publication }}
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// models
import { IStartup } from '@/models';

export default defineComponent({
  name: 'StartupBio',
  props: {
    startup: {
      type: Object as () => IStartup,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.startup-card {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  .h4 {
    display: inline-block;
    border-bottom: 1px solid;
  }

  .description {
    min-height: 7.5rem;
  }

  .shutdown {
    background: $sg-shutdown;
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
}
</style>
