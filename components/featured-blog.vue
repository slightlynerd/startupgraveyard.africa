<template>
  <div class="featured-blog row align-items-center gx-0">
    <div class="col-12 col-lg-4">
      <img src="/graveyard.jpeg" alt="graveyard" class="featured-image">
    </div>
    <div class="col-12 col-lg-8 p-4">
      <div class="featured-info">
        <h2 class="h1">
          MyCase, Transforming Startup Practice
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam vel ut pariatur eos earum modi nulla unde rerum! Tempora illum distinctio aspernatur repellat voluptate at dolorem inventore iusto quam.</p>
        <router-link
          class="btn d-inline-block mt-4"
          to="/blog/1"
        >
          READ MORE
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

.featured-blog {
  background-color: $sg-secondary-color;
}

.featured-image {
  width: 100%;
  max-height: 24rem;
  object-fit: cover;
}

.featured-info {
  max-width: 80%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
}
</style>
