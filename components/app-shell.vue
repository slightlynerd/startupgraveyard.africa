<template>
  <main class="container my-5">
    <h1 class="text-center h1">
      💀 startupgraveyard.africa
    </h1>
    <p class="lead text-center mt-3">
      A catalogue of startups operating in Africa that have shut down.
    </p>

    <startup-list-filters
      :categories="categories"
      :countries="countries"
      :search-text="searchText"
      :selected-category="selectedCategory"
      :selected-country="selectedCountry"
      @update:search-text="updateSearchText"
      @update:selected-country="updateSelectedCountry"
      @update:selected-category="updateSelectedCategory"
    />

    <section>
      <div class="row">
        <template v-if="computedStartups.length > 0">
          <startup-list :list="computedStartups" />
        </template>
        <template v-else>
          <no-search-results />
        </template>
      </div>

      <app-pagination
        :page-count="pageCount"
        @page-changed="onPaginationChanged"
      />
    </section>
  </main>
  <app-footer />
</template>

<script lang="ts" setup>
import { computed, ref, defineEmits } from 'vue';
import { format } from 'date-fns';

// data
import {
  categories as allCategories,
  startups as allStartups,
  countries as allCountries
} from '~/assets/data';

// models
import * as Models from '@/models';

// emits
// eslint-disable-next-line func-call-spacing
defineEmits<{
  (e: 'update:search-text', value: string): void;
  (e: 'update:selected-category', value: Models.Category): void;
  (e: 'update:selected-country', value: Models.Country): void;
}>();

// common
const startups: Models.IStartup[] = allStartups
  .sort((a, b) => +new Date(b.shutdownDate) - +new Date(a.shutdownDate))
  .map(item => ({
    ...item,
    shutdownDate: format(new Date(item.shutdownDate), 'MMM. yyyy')
  }));
const categories: Models.ICategory[] = allCategories.filter(
  item => item.count > 0
);
const countries: Models.ICountry[] = allCountries.filter(
  item => item.count > 0
);

// refs
const searchText = ref<string>('');
const selectedCategory = ref<Models.Category>(Models.Category.All);
const selectedCountry = ref<Models.Country>(Models.Country.All);
const pageSize = ref<number>(Models.DEFAULT_PAGE_SIZE);
const page = ref<number>(Models.DEFAULT_PAGE);

// computed
const pageCount = computed(() => startups.length / pageSize.value);
const computedStartups = computed(() =>
  startups
    .filter((item) => {
      const textMatch =
        searchText.value.length === 0 ||
        item.name.toLowerCase().includes(searchText.value.toLowerCase());

      const categoryMatch =
        selectedCategory.value === Models.Category.All ||
        item.category === selectedCategory.value;

      const countryMatch =
        selectedCountry.value === Models.Country.All ||
        item.location.includes(selectedCountry.value);

      return textMatch && categoryMatch && countryMatch;
    })
    .slice((page.value - 1) * pageSize.value, pageSize.value * page.value)
);

// methods
function updateSearchText (value: string): void {
  searchText.value = value;
}

function updateSelectedCategory (value: Models.Category): void {
  selectedCategory.value = value;
}

function updateSelectedCountry (value: Models.Country): void {
  selectedCountry.value = value;
}

function onPaginationChanged (currentPage: number): void {
  page.value = currentPage;
  document.getElementById('listFilters')?.scrollIntoView();
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 400px) {
  .lead {
    font-size: 1rem;
  }
}
</style>
