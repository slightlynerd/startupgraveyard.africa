<template>
  <div id="listFilters" class="row align-items-center">
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
        class="form-control bg-transparent mt-3 me-3">
        <option
          v-for="(item, index) in categories"
          :key="index"
          :value="item.name">
          {{ item.name }} ({{ item.count }})
        </option>
      </select>
      <select
        v-model="mSelectedCountry"
        aria-label="Countries"
        class="form-control bg-transparent mt-3">
        <option
          v-for="(item, index) in countries"
          :key="index"
          :value="item.name">
          {{ item.name }} ({{ item.count }})
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits, ref, watch } from 'vue';

// models
import { ICategory, Category, ICountry, Country } from '@/models';

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
  selectedCategory: Category.All,
  selectedCountry: Country.All
});

// emits
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
