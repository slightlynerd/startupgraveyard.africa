<template>
  <div class="row align-items-center">
    <div class="col-lg-6 col-md-8 mx-auto text-center">
      <input
        v-model="mSearchText"
        aria-label="Search"
        class="form-control bg-transparent me-3 mt-3"
        type="text"
        placeholder="Search" />
      <select
        v-model="mSelectedCategory"
        aria-label="Categories"
        class="form-control bg-transparent mt-3">
        <option
          v-for="(item, index) in categories"
          :key="index"
          :value="item.name">
          {{ item.name }} ({{ item.count }})
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// models
import { ICategory, Category } from '@/models';

export default defineComponent({
  name: 'ListFilters',
  props: {
    searchText: {
      type: String,
      default: ''
    },
    selectedCategory: {
      type: String,
      default: Category.All
    },
    categories: {
      type: Array as () => ICategory[],
      required: true
    }
  },
  emits: ['update:search-text', 'update:selected-category'],
  data() {
    return {
      mSearchText: this.searchText,
      mSelectedCategory: this.selectedCategory
    };
  },
  watch: {
    mSearchText(newValue: string, oldValue: string): void {
      if (newValue !== oldValue) {
        this.$emit('update:search-text', newValue);
      }
    },
    mSelectedCategory(newValue: string, oldValue: string): void {
      if (newValue !== oldValue) {
        this.$emit('update:selected-category', newValue);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.form-control {
  height: 2.5rem;
}

@media screen and (max-width: 400px) {
  .form-control {
    width: 100%;
  }
}
</style>
