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

const page = defineModel<number>({ default: DEFAULT_PAGE });

// methods
function onPaginationChanged (newPage: number): void {
  page.value = newPage;
}
</script>
