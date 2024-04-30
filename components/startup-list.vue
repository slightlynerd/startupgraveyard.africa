<template>
  <div>
    <div class="d-flex mb-2">
      <p id="totalStartups" class="text-muted h6">
        {{ totalStartups }}
      </p>
    </div>
    <div class="row">
      <div
        v-for="(item, index) in list"
        :key="index"
        class="col-12 col-md-6 col-lg-4 mb-3"
      >
        <startup-bio :startup="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// models
import { type IStartup } from '@/models';

// props
const props = defineProps<{
  list: IStartup[];
  total: number;
}>();

// computed
const totalStartups = computed(() => {
  return `${props.total} startup${props.total > 1 ? 's' : ''}`;
});
</script>
