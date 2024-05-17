<template>
  <div class="startup-card px-3 py-4">
    <h2 class="h6">
      {{ startup.name }}
      <client-only>
        <Popper v-if="startup.note" hover placement="right" :content="startup.note">
          <span class="info ms-1" tabindex="0">i</span>
        </Popper>
      </client-only>
    </h2>
    <div class="d-flex align-items-center justify-content-between">
      <div class="col mt-2">
        <p class="shutdown text-muted">
          Shutdown: <span class="text-danger">{{ startup.shutdownDate }}</span>
        </p>
      </div>
      <div class="col mt-2">
        <p class="text-muted text-end">
          Raised: <span class="text-success">{{ formatAmountToCurrency(startup?.raised) }}</span>
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
        v-if="isExternalLink"
        class="btn d-inline-block text-uppercase"
        target="_blank"
        :href="`${startup.newsSource}?referrer=startupgraveyard.africa`"
        @mousedown="logAnalyticsEvent('startup_link_clicked', {
          startup_name: props.startup.name
        });"
        @touchstart="logAnalyticsEvent('startup_link_clicked', {
          startup_name: props.startup.name
        });"
      >
        Learn More
      </a>
      <nuxt-link
        v-else
        class="btn d-inline-block text-uppercase"
        :to="startup.newsSource"
      >
        Learn more
      </nuxt-link>
    </p>
  </div>
</template>

<script lang="ts" setup>
import Popper from 'vue3-popper';

// models
import { type IStartup } from '~/models';

// utils
import { formatAmountToCurrency, logAnalyticsEvent } from '@/utils';

// props
const props = defineProps<{
  startup: IStartup;
}>();

// computed
const isExternalLink = computed(() => props.startup.newsSource.startsWith('http'));
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

  span.info {
    cursor: pointer;
    font-size: 0.75rem;
    background-color: $sg-primary-color;
    color: white;
    border-radius: 50%;
    padding: 0 0.45rem;
    font-weight: bold;
  }
}
</style>
