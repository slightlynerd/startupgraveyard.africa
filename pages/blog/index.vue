<template>
  <div>
    <h1 class="h3 mb-4">
      Recent Posts
    </h1>
    <section>
      <recent-blogs :blogs="recentBlogPosts" />
    </section>

    <app-pagination
      :page-count="pageCount"
      @page-changed="onPaginationChanged"
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

// models
import { DEFAULT_PAGE_SIZE, FirestoreCollection, type IBlog } from '~/models';

// common
const { $firestore } = useNuxtApp();

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
  const querySnapshot = await getDocs(query);
  lastVisibleDocument.value = querySnapshot.docs[querySnapshot.docs.length - 1];
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

// lifecycle hooks
onMounted(async () => {
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
});

// page metadata
useHead({
  title: 'Blog | Startup Graveyard',
  meta: [{ name: 'description', content: 'My amazing site.' }]
});
</script>
