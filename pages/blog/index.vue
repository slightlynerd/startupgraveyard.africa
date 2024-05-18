<template>
  <main>
    <p class="lead mb-4 col-md-9">
      Explore the world of startups with our insightful blog posts. Learn about African startups, funding tips, growth hacks, and inspiring founder stories to launch and scale your dream business.
    </p>

    <h1 class="h6 text-uppercase fw-bold mb-3">
      Recent Posts
    </h1>

    <div class="search-wrapper">
      <input
        v-model="searchText"
        aria-label="Search blog"
        class="search-input form-control mb-4"
        type="text"
        placeholder="Search posts..."
      >
    </div>

    <section>
      <div class="row">
        <template v-if="computedBlogs.length > 0">
          <div
            v-for="blog in computedBlogs"
            :key="blog.id"
            class="col-lg-4 col-md-6 mb-4"
          >
            <blog-card :blog="blog" />
          </div>
        </template>
        <template v-else>
          <no-search-results />
        </template>
      </div>
    </section>

    <app-pagination
      v-if="computedBlogs.length > 0"
      :page-count="pageCount"
      :model-value="page"
      @update:model-value="onPaginationChanged"
    />
  </main>
</template>

<script lang="ts" setup>
import {
  Query,
  collection,
  getDocs,
  orderBy,
  query
} from 'firebase/firestore';
import sanitizeHtml from 'sanitize-html';

// stores
import { useBlogStore } from '~/stores/blog';

// models
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE, FirestoreCollection, type IBlog } from '~/models';

// common
const { $firestore } = useNuxtApp();
const blogStore = useBlogStore();
const firestoreRef = collection($firestore, FirestoreCollection.Blog);

// refs
const searchText = ref<string>('');
const page = ref<number>(DEFAULT_PAGE);
const recentBlogPosts = ref<IBlog[]>([]);

// computed
const pageCount = computed(() => Math.ceil(filteredBlogs.value.length / DEFAULT_PAGE_SIZE));

// TODO: refactor to use server-side search and pagination
const filteredBlogs = computed(() => {
  if (!searchText.value || searchText.value.length < 2) {
    return recentBlogPosts.value;
  }

  return recentBlogPosts.value.filter(blog =>
    blog.title.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

const computedBlogs = computed(() =>
  filteredBlogs.value
    .slice((page.value - 1) * DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE * page.value)
);

// methods
function onPaginationChanged (currentPage: number): void {
  page.value = currentPage;
}

async function getBlogs (query: Query): Promise<void> {
  blogStore.setLoading(true);
  try {
    const querySnapshot = await getDocs(query);
    recentBlogPosts.value = [];

    querySnapshot.forEach((doc) => {
      if (doc.data()) {
        const blog = doc.data() as IBlog;
        recentBlogPosts.value.push({
          ...blog,
          id: doc.id,
          bodyContent: sanitizeHtml(blog.bodyContent, {
            allowedTags: []
          })
        });
      }
    });
    console.log({ ...recentBlogPosts.value });
  } catch (error) {
    // TODO: handle error
  } finally {
    blogStore.setLoading(false);
  }
}

// fetch blogs
const q = query(
  firestoreRef,
  orderBy('createdAt', 'desc')
);
await getBlogs(q);

// page metadata
useHead({
  title: 'Blog | Startup Graveyard',
  meta: [
    {
      name: 'description',
      content:
        'Get into the world of startups with our insightful blog posts. Learn about African startups, funding tips, growth hacks, and inspiring founder stories to launch and scale your dream business.'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Blog | Startup Graveyard'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'Blog | Startup Graveyard'
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://startupgraveyard.africa/blog'
    },
    {
      name: 'author',
      content: 'Kelvin Gobo'
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:url',
      content: 'https://twitter.com/stgr_africa'
    },
    {
      property: 'twitter:title',
      content: 'Blog | Startup Graveyard'
    },
    {
      property: 'twitter:description',
      content: 'Blog | Startup Graveyard'
    }
  ]
});
</script>

<style lang="scss" scoped>
.search-wrapper {
  width: 50%;

  @media screen and (max-width: 992px) {
    width: 75%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .search-input {
    max-width: unset;
  }
}

</style>
