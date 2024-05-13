<template>
  <nav class="container">
    <div class="d-flex justify-content-between py-3">
      <nuxt-link class="text-center text-uppercase fw-bold h5 mb-0" to="/">
        💀 startupgraveyard.africa
      </nuxt-link>
      <div>
        <nuxt-link to="/startups" class="me-4">
          Startups
        </nuxt-link>
        <nuxt-link to="/blog">
          Blog
        </nuxt-link>
      </div>
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
