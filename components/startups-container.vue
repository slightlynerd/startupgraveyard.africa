<template>
  <div class="mb-5">
    <div class="row">
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
      <section class="mt-3">
        <template v-if="computedStartups.length > 0">
          <startup-list :list="computedStartups" :total="filteredStartups.length" />
        </template>
        <template v-else>
          <no-search-results />
        </template>

        <app-pagination
          :page-count="pageCount"
          :model-value="page"
          @update:model-value="onPaginationChanged"
        />
      </section>
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
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

// constants
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
const selectedCategory = ref<Models.Category>();
const selectedCountry = ref<Models.Country>();
const pageSize = ref<number>(Models.DEFAULT_PAGE_SIZE);
const page = ref<number>(Models.DEFAULT_PAGE);

// computed
const pageCount = computed(() => Math.ceil(filteredStartups.value.length / pageSize.value));

const filteredStartups = computed(() =>
  startups
    .filter((item) => {
      const textMatch =
        searchText.value.length === 0 ||
        item.name.toLowerCase().includes(searchText.value.toLowerCase());

      const categoryMatch =
        !selectedCategory.value || item.category === selectedCategory.value;

      const countryMatch =
        selectedCountry.value === Models.Country.All ||
        item.location.includes(selectedCountry.value || '');

      return textMatch && categoryMatch && countryMatch;
    })
);

const computedStartups = computed(() =>
  filteredStartups.value
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
  document.getElementById('totalStartups')?.scrollIntoView();
}

// watch
watch(filteredStartups, () => (page.value = 1));
</script>
