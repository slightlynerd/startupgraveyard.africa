<template>
  <div class="not-found-container">
    <h2 class="text-center">No Results Found</h2>
    <p class="text-center">
      Sorry, we couldn't find any results matching your criteria.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound'
});
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  padding: 3rem 1.5rem;
  text-align: center;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
}

.not-found-container h2 {
  color: #721c24;
}

.not-found-container p {
  color: #721c24;
  margin-top: 10px;
}
</style>