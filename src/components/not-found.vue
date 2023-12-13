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
  border-radius: 5px;
}

.not-found-container h2 {
  color: #e02134;
}

.not-found-container p {
  color: #e02134;
  margin-top: 10px;
}
</style>