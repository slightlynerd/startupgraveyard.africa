<template>
  <div
    v-for="(item, index) in list"
    :key="index"
    class="col-12 col-sm-8 col-md-6 col-lg-4 mt-5"
  >
    <startup-bio :startup="item" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

// models
import { type IStartup } from '@/models';

// props
defineProps<{
  list: IStartup[];
}>();
</script>
