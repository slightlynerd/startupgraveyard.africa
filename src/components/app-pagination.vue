<template>
  <div
    class="pagination-wrapper d-flex flex-column align-items-center justify-content-center mt-5">
    <div class="d-flex align-items-center">
      <paginate
        v-model="page"
        prev-class="page-item prev-item"
        next-class="page-item next-item"
        :page-count="pageCount"
        :click-handler="onPaginationChanged"
        :prev-text="''"
        :next-text="''"
        :break-view-text="'...'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Paginate from 'vuejs-paginate-next';

// models
import { DEFAULT_PAGE } from '@/models/constants';

export default defineComponent({
  name: 'AppPagination',
  components: {
    Paginate
  },
  props: {
    pageCount: {
      type: Number,
      default: 0
    }
  },
  emits: ['page-changed'],
  setup(_, { emit }) {
    // refs
    const page = ref<number>(DEFAULT_PAGE);

    // methods
    function onPaginationChanged(page: number): void {
      emit('page-changed', page);
    }

    return {
      page,
      onPaginationChanged
    };
  }
});
</script>
