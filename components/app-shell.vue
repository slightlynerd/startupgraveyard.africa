<template>
  <div class="mb-5">
    <p class="note mb-2">
      A catalogue of African startups that have shut down their services. This website serves as a graveyard for these fallen ventures, documenting their shortcomings so future entrepreneurs can avoid the same pitfalls and build even greater successes.
    </p>

    <make-submission class="mb-3" />

    <div class="row">
      <div class="col-lg-2 col-md-3 col-12 mt-3">
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
      </div>
      <div class="col-lg-10 col-md-9 col-12 mt-3">
        <section>
          <template v-if="computedStartups.length > 0">
            <startup-list :list="computedStartups" :total="startups.length" />
          </template>
          <template v-else>
            <no-search-results />
          </template>

          <app-pagination
            :page-count="pageCount"
            @page-changed="onPaginationChanged"
          />
        </section>
      </div>
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
const selectedCategory = ref<Models.Category>();
const selectedCountry = ref<Models.Country>();
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
        !selectedCategory.value ||
        item.category === selectedCategory.value;

      const countryMatch =
        selectedCountry.value === Models.Country.All ||
        item.location.includes(selectedCountry.value || '');

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
  document.getElementById('totalStartups')?.scrollIntoView();
}
</script>

<style lang="scss" scoped>
.note {
  max-width: 75%;
}

@media (max-width: 768px) {
  .note {
    max-width: 100%;
  }
}
</style>
