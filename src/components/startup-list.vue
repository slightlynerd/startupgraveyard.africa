<template>
  <div
    v-for="(item, index) in list"
    :key="index"
    class="
    startup-container mt-5 col-12 col-sm-6 col-md-5 col-lg-4
    ">
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

<style lang="scss" scoped>
.startup-container {
  margin: auto;
}
</style>
