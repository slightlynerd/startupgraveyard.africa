<template>
  <div>
    <p class="h6 fw-bold mb-2">
      FILTERS
    </p>
    <input
      v-model="mSearchText"
      aria-label="Search"
      class="form-control me-3 mb-2"
      type="text"
      placeholder="Enter Startup Name"
    >
    <client-only>
      <vue-select
        v-model="mSelectedCategory"
        label="name"
        aria-label="Categories"
        class="form-control me-3 mb-2"
        placeholder="Select Category"
        :clearable="true"
        :reduce="item => item.name"
        :options="categories"
      />
    </client-only>
    <client-only>
      <vue-select
        v-model="mSelectedCountry"
        label="name"
        aria-label="Countries"
        class="form-control me-3 mb-2"
        placeholder="Select Country"
        :clearable="true"
        :reduce="item => item.name"
        :options="countries"
      />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
// models
import { type ICategory, type ICountry } from '@/models';

interface IProps {
  searchText: string;
  selectedCategory: string;
  selectedCountry: string;
  categories: ICategory[];
  countries: ICountry[];
}

// props
const props = withDefaults(defineProps<IProps>(), {
  searchText: '',
  selectedCategory: '',
  selectedCountry: ''
});

// emits
// eslint-disable-next-line func-call-spacing
const emit = defineEmits<{
  (e: 'update:search-text', value: string): void;
  (e: 'update:selected-category', value: string): void;
  (e: 'update:selected-country', value: string): void;
}>();

// refs
const mSearchText = ref<string>(props.searchText);
const mSelectedCategory = ref<string>(props.selectedCategory);
const mSelectedCountry = ref<string>(props.selectedCountry);

// watch
watch(
  [mSearchText, mSelectedCategory, mSelectedCountry],
  ([newSearchText, newSelectedCategory, newSelectedCountry]) => {
    if (newSearchText !== props.searchText) {
      emit('update:search-text', newSearchText);
    } else if (newSelectedCategory !== props.selectedCategory) {
      emit('update:selected-category', newSelectedCategory);
    } else if (newSelectedCountry !== props.selectedCountry) {
      emit('update:selected-country', newSelectedCountry);
    }
  }
);
</script>
