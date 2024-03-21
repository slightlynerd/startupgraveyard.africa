<template>
  <div
    class="pagination-wrapper d-flex flex-column align-items-center justify-content-center mt-5"
  >
    <div class="d-flex align-items-center">
      <paginate
        v-model="page"
        prev-class="page-item prev-item"
        next-class="page-item next-item"
        :page-count="pageCount"
        :click-handler="onPaginationChanged"
        :prev-text="''"
        :next-text="''"
        :break-view-text="'...'"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Paginate from 'vuejs-paginate-next';

// models
import { DEFAULT_PAGE } from '@/models/constants';

// props
defineProps<{
  pageCount: number;
}>();

// emits
// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'page-changed', page: number): void;
}>();

// refs
const page = ref<number>(DEFAULT_PAGE);

// methods
function onPaginationChanged (page: number): void {
  emit('page-changed', page);
}
</script>
