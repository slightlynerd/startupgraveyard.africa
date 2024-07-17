<template>
  <div
    id="newsletterModal"
    class="modal fade show"
    tabindex="-1"
    aria-labelledby="newsletterModalLabel"
    role="dialog"
    data-bs-keyboard="false"
    aria-modal="true"
    style="display: block;"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title h5 fw-bold">
            Get weekly updates on tech startups in Africa
          </h1>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="close"
          />
        </div>
        <div class="modal-body">
          <substack-iframe />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// emits
// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'close'): void;
}>();

// methods
function close (): void {
  emit('close');
};
</script>
