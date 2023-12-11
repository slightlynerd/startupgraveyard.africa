<template>
  <app-shell />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// components
import AppShell from '@/components/app-shell.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppShell
  }
});
</script>

<style lang="scss">
@import '~@/assets/styles/main.scss';
</style>
