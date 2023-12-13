<template>
  <div>
    <div class="startup-card">
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
      <p class="mt-2">
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
.startup-card {
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  min-height: 320px;
  transition: all 0.3s ease;
}

.startup-card:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px);
}
.h4 {
  display: inline-block;
  border-bottom: 1px solid;
}

.shutdown {
  background: #f0eded;
  border-radius: 5px;
  padding: 0.25rem;
  width: fit-content; 
}

@media (max-width: 768px) {
  .startup-card {
    min-height: 100%;
  }
}

@media (max-width: 576px) {
  .startup-card {
    width: 90%;
    margin: auto;
  }
}
</style>
