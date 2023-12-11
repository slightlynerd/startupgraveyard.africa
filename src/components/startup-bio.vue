<template>
  <div class="px-md-3">
    <div>
      <a target="_blank" :href="startup.newsSource">
        <h2 class="h4">{{ startup.name }}</h2>
      </a>
      <p class="text-muted mb-1">{{ startup.location }}</p>
      <div class="row align-items-center justify-content-between">
        <div class="col">
          <p class="text-muted small">❌ {{ startup.shutdownDate }}</p>
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
.h4 {
  display: inline-block;
  border-bottom: 1px solid;
}
</style>
