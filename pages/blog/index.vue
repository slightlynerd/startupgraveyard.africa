<template>
  <div>
    <h1 class="h3 mb-4">
      Recent Posts
    </h1>
    <section>
      <featured-blog :blog="featuredPost" class="mb-4" />
      <recent-blogs :blogs="recentBlogPosts" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { collection, query, limit, getDocs } from 'firebase/firestore';

// models
import { FirestoreCollections, type IBlog } from '~/models';

// common
const { $firestore } = useNuxtApp();

// refs
const featuredPost = ref<IBlog>();
const recentBlogPosts = ref<IBlog[]>([]);

// lifecycle hooks
onMounted(async () => {
  const q = query(collection($firestore, FirestoreCollections.Blog), limit(12));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    if (doc.data()) {
      const blog = doc.data() as IBlog;
      if (featuredPost.value === undefined) {
        featuredPost.value = {
          ...blog,
          id: doc.id
        };
      } else {
        recentBlogPosts.value.push({
          ...blog,
          id: doc.id
        });
      }
    }
  });
});

// page metadata
useHead({
  title: 'Blog | Startup Graveyard',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
});
</script>
