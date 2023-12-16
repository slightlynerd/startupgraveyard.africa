<template>
  <footer class="container my-5">
    <h2 class="h5">💀 startupgraveyard.africa</h2>
    <startup-form />
    <p class="disclaimer small mx-auto pt-5">
      <strong>Disclaimer: </strong>
      <span>
        While this site offers valuable insights, remember it's not a definitive
        truth machine. Companies are intricate entities shaped by a web of
        long-term influences, making simple pronouncements risky.
      </span>
    </p>
    <div class="pt-4">
      <p class="text-center small">
        &copy; 2023. Contributions are welcome on
        <a
          href="https://github.com/slightlynerd/startupgraveyard.africa"
          target="_blank"
          class="text-decoration-underline">
          GitHub.
        </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// components
import StartupForm from '@/components/startup-form.vue';

export default defineComponent({
  name: 'AppFooter',
  components: {
    StartupForm
  }
});
</script>

<style lang="scss" scoped>
p.disclaimer {
  max-width: 75%;
}

@media screen and (max-width: 768px) {
  p.disclaimer {
    max-width: 100%;
  }
}
</style>
