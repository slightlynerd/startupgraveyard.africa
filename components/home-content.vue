<template>
  <div class="mb-5">
    <p class="note mb-2">
      A catalogue of African startups that have shut down their services. This
      website serves as a graveyard for these fallen ventures, documenting their
      shortcomings so future entrepreneurs can avoid the same pitfalls and build
      even greater successes.
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

    <section v-if="showBlog" class="mt-5 pt-5">
      <p class="h6 text-uppercase fw-bold mb-2">
        Recent Posts
      </p>
      <div class="row">
        <div v-for="blog in recentBlogPosts" :key="blog.id" class="col-md-4 mb-4">
          <blog-card :blog="blog" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { format } from 'date-fns';
import { collection, query, limit, getDocs, orderBy } from 'firebase/firestore';
import sanitizeHtml from 'sanitize-html';
import { storeToRefs } from 'pinia';

// stores
import { useBlogStore } from '@/stores/blog';

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
const { $firestore } = useNuxtApp();
const blogStore = useBlogStore();

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
const MIN_BLOG_POSTS = 3;

// refs
const searchText = ref<string>('');
const selectedCategory = ref<Models.Category>();
const selectedCountry = ref<Models.Country>();
const pageSize = ref<number>(Models.DEFAULT_PAGE_SIZE);
const page = ref<number>(Models.DEFAULT_PAGE);
const recentBlogPosts = ref<Models.IBlog[]>([]);
const { config } = storeToRefs(blogStore);

// computed
const pageCount = computed(() => startups.length / pageSize.value);
const computedStartups = computed(() =>
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
    .slice((page.value - 1) * pageSize.value, pageSize.value * page.value)
);
const showBlog = computed(() =>
  process.env.NODE_ENV === 'development'
    ? config.value.testShowBlog
    : config.value.showBlog
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

// lifecycle hooks
onMounted(async () => {
  const q = query(
    collection($firestore, Models.FirestoreCollection.Blog),
    orderBy('createdAt', 'desc'),
    limit(MIN_BLOG_POSTS)
  );
  const querySnapshot = await getDocs(q);
  recentBlogPosts.value = [];

  querySnapshot.forEach((doc) => {
    if (doc.data()) {
      const blog = doc.data() as Models.IBlog;
      recentBlogPosts.value.push({
        ...blog,
        id: doc.id,
        bodyContent: sanitizeHtml(blog.bodyContent, {
          allowedTags: []
        })
      });
    }
  });
});
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
