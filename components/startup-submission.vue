<template>
  <div>
    <p class="mt-3">
      Don't see a startup on the list?
      <span
        data-bs-toggle="modal"
        data-bs-target="#startupFormModal"
        class="text-decoration-underline cursor-pointer"
        role="button"
      >
        Make a submission.
      </span>
    </p>

    <!-- Modal -->
    <div
      id="startupFormModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Add startup to list
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div class="modal-body">
            <startup-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer;
}

p {
  font-size: 1.15rem;
}
</style>
