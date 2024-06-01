<template>
  <header class="position-sticky top-0">
    <nav class="container">
      <div class="d-flex align-items-center justify-content-between py-3">
        <nuxt-link class="text-center text-uppercase fw-bold h5 mb-0" to="/">
          💀 Startup Graveyard
        </nuxt-link>
        <div>
          <nuxt-link to="/startups" class="me-4 me-md-5">
            Startups
          </nuxt-link>
          <nuxt-link to="/blog">
            Blog
          </nuxt-link>
        </div>
      </div>
      <hr class="my-0 pt-0 mb-4">
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: $sg-body-bg;
  z-index: 1000;
}

hr {
  border: none;
  border-bottom: 1px solid $sg-placeholder-color;
}

@media screen and (max-width: 600px) {
  a.h5 {
    font-size: 1rem;
  }
}
</style>
