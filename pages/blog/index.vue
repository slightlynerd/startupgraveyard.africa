<template>
  <div>
    <h1 class="h6 text-uppercase fw-bold mb-3">
      Recent Posts
    </h1>

    <section>
      <div class="row">
        <div
          v-for="blog in recentBlogPosts"
          :key="blog.id"
          class="col-lg-4 col-md-6 mb-4"
        >
          <blog-card :blog="blog" />
        </div>
      </div>
    </section>

    <app-pagination
      :page-count="pageCount"
      :model-value="page"
      @update:model-value="onPaginationChanged"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  collection,
  query,
  limit,
  getDocs,
  getCountFromServer,
  endBefore,
  startAfter,
  QueryDocumentSnapshot,
  type DocumentData,
  Query,
  orderBy
} from 'firebase/firestore';
import sanitizeHtml from 'sanitize-html';

// stores
import { useBlogStore } from '~/stores/blog';

// models
import { DEFAULT_PAGE_SIZE, FirestoreCollection, type IBlog } from '~/models';

// common
const { $firestore } = useNuxtApp();
const blogStore = useBlogStore();

// refs
const recentBlogPosts = ref<IBlog[]>([]);
const totalCount = ref<number>(1);
const page = ref<number>(1);
const lastVisibleDocument =
  ref<QueryDocumentSnapshot<DocumentData, DocumentData>>();

// computed
const pageCount = computed(() => totalCount.value / DEFAULT_PAGE_SIZE);

// methods
function onPaginationChanged (currentPage: number): void {
  if (currentPage > page.value) {
    goToNextPage();
  } else {
    goToPreviousPage();
  }
  page.value = currentPage;
}

async function getBlogs (query: Query): Promise<void> {
  blogStore.setLoading(true);
  try {
    const querySnapshot = await getDocs(query);
    lastVisibleDocument.value =
      querySnapshot.docs[querySnapshot.docs.length - 1];
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
  } catch (error) {
    // TODO: handle error
  } finally {
    blogStore.setLoading(false);
  }
}

function goToPreviousPage (): void {
  const q = query(
    collection($firestore, FirestoreCollection.Blog),
    orderBy('createdAt', 'desc'),
    limit(DEFAULT_PAGE_SIZE),
    endBefore(lastVisibleDocument.value)
  );
  getBlogs(q);
}

function goToNextPage (): void {
  const q = query(
    collection($firestore, FirestoreCollection.Blog),
    orderBy('createdAt', 'desc'),
    limit(DEFAULT_PAGE_SIZE),
    startAfter(lastVisibleDocument.value)
  );
  getBlogs(q);
}

// fetch blogs
const totalPosts = await getCountFromServer(
  collection($firestore, FirestoreCollection.Blog)
);
totalCount.value = totalPosts.data().count;
const q = query(
  collection($firestore, FirestoreCollection.Blog),
  orderBy('createdAt', 'desc'),
  limit(DEFAULT_PAGE_SIZE)
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
