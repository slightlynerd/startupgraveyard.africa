<template>
  <nav class="container">
    <div class="d-flex justify-content-between py-3">
      <router-link class="text-center text-uppercase fw-bold h5 mb-0" to="/">
        💀 startupgraveyard.africa
      </router-link>
      <router-link to="/blog">
        Blog
      </router-link>
    </div>
    <hr class="my-0 pt-0 mb-4">
  </nav>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
hr {
  border: none;
  border-bottom: 1px solid $sg-placeholder-color;
}
</style>
