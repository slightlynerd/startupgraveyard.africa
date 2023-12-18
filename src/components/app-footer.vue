<template>
  <footer class="container my-5">
    <h2 class="h6 footer-text mx-auto pt-5">💀 startupgraveyard.africa</h2>
    <p class="footer-text small mx-auto mt-3">
      <strong>Disclaimer: </strong>
      <span>
        While this site offers valuable insights, remember it's not a definitive
        truth machine. Companies are intricate entities shaped by a web of
        long-term influences, making simple pronouncements risky.
      </span>
    </p>
    <p class="footer-text small mx-auto mt-3">
      Don't see a startup on the list?
      <a
        data-bs-toggle="modal"
        data-bs-target="#startupFormModal"
        class="text-decoration-underline">
        Make a submission.
      </a>
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

    <!-- Modal -->
    <div
      id="startupFormModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add startup to list</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <startup-form />
          </div>
        </div>
      </div>
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
p.footer-text,
h2.footer-text {
  max-width: 75%;
}

@media screen and (max-width: 768px) {
  p.footer-text,
  h2.footer-text {
    max-width: 100%;
  }
}
</style>
