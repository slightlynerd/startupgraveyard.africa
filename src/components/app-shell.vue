<template>
  <main class="container my-5">
    <h1 class="text-center h1">💀 startupgraveyard.africa</h1>
    <p class="lead text-center mt-3">
      A catalog of startups operating in Africa that have shut down.
    </p>

    <startup-list-filters
      :categories="categories"
      :countries="countries"
      :search-text="searchText"
      :selected-category="selectedCategory"
      @update:search-text="updateSearchText"
      @update:selected-country="updateSelectedCountry"
      @update:selected-category="updateSelectedCategory" />

    <section>
      <div class="row">
        <startup-list :list="computedStartups" />
      </div>
    </section>
  </main>
  <footer class="my-5">
    <div class="pt-5">
      <p class="text-center small">
        &copy; 2023. Contributions are welcome on
        <a
          href="https://github.com/slightlynerd/startupgraveyard.africa"
          target="_blank"
          class="text-decoration-underline">
          GitHub.
        </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

// data
import {
  categories as allCategories,
  startups as allStartups,
  countries as allCountries
} from '@/assets/data';

// components
import StartupListFilters from '@/components/startup-list-filters.vue';
import StartupList from '@/components/startup-list.vue';

// models
import { Category, Country, ICategory, ICountry, IStartup } from '@/models';

export default defineComponent({
  name: 'AppShell',
  components: {
    StartupListFilters,
    StartupList
  },
  setup() {
    // common
    const startups: IStartup[] = allStartups.sort(
      (a, b) => +new Date(b.shutdownDate) - +new Date(a.shutdownDate)
    );
    const categories: ICategory[] = allCategories.filter(
      item => item.count > 0
    );
    const countries: ICountry[] = allCountries.filter(item => item.count > 0);

    // refs
    const searchText = ref<string>('');
    const selectedCategory = ref<Category>(Category.All);
    const selectedCountry = ref<Country>(Country.All);

    // computed
    const computedStartups = computed(() =>
      startups.filter(item => {
        const textMatch =
          searchText.value.length === 0 ||
          item.name.toLowerCase().includes(searchText.value.toLowerCase());

        const categoryMatch =
          selectedCategory.value === Category.All ||
          item.category === selectedCategory.value;

        const countryMatch =
          selectedCountry.value === Country.All ||
          item.location.includes(selectedCountry.value);

        return textMatch && categoryMatch && countryMatch;
      })
    );

    // methods
    function updateSearchText(value: string): void {
      searchText.value = value;
    }

    function updateSelectedCategory(value: Category): void {
      selectedCategory.value = value;
    }

    function updateSelectedCountry(value: Country): void {
      selectedCountry.value = value;
    }

    return {
      countries,
      categories,
      searchText,
      selectedCategory,
      computedStartups,
      updateSearchText,
      updateSelectedCategory,
      updateSelectedCountry
    };
  }
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 400px) {
  .lead {
    font-size: 1rem;
  }
}
</style>
