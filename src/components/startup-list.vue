<template>
  <div v-for="(item, index) in list" :key="index" class="col-md-4 mt-5">
    <startup-bio :startup="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// components
import StartupBio from '@/components/startup-bio.vue';

// models
import { IStartup } from '@/models';

export default defineComponent({
  name: 'StartupList',
  components: {
    StartupBio
  },
  props: {
    list: {
      type: Array as () => IStartup[],
      required: true
    }
  }
});
</script>
