<template>
  <div>
    <author-bio :author="computedAuthorData" />
    <hr class="my-5">
    <section>
      <h2 class="h3 mb-4">
        Posts by {{ computedAuthorData?.firstName }} {{ computedAuthorData?.lastName }}
      </h2>
      <div class="row">
        <div
          v-for="item in computedAuthorPosts"
          :key="item.id"
          class="col-md-6 mb-5"
        >
          <author-blog-card :blog="item" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import sanitizeHtml from 'sanitize-html';

// models
import { FirestoreCollection, type IAuthor, type IBlog } from '@/models';

// utils
import { jsonToObject } from '@/utils';

// common
const { $firestore } = useNuxtApp();
const route = useRoute();

// refs
const metaDescription = ref<string>('');

// computed
const computedAuthorData = computed(() => authorDetails.value?.authorData);
const computedAuthorPosts = computed(() =>
  jsonToObject(authorDetails.value?.authorPosts || '[]')
);

// fetch author data
const { data: authorDetails } = await useAsyncData(
  route.params.id.toString(),
  async () => {
    try {
      const authorSnap = await getDoc(doc(
        $firestore,
        FirestoreCollection.Authors,
        route.params.id.toString()
      ));
      // TODO: implement pagination of posts
      const authorPostsSnap = await getDocs(
        query(
          collection($firestore, FirestoreCollection.Blog),
          where('author', '==', route.params.id.toString())
        )
      );
      let authorData: IAuthor = {} as IAuthor;
      const authorPosts: IBlog[] = [];
      if (authorSnap.exists()) {
        authorData = authorSnap.data() as IAuthor;
        metaDescription.value = authorData.bio;
      }
      if (authorPostsSnap.docs?.length) {
        authorPostsSnap.forEach((doc) => {
          if (doc.data()) {
            const blog = doc.data() as IBlog;
            authorPosts.push({
              ...blog,
              id: doc.id,
              bodyContent: sanitizeHtml(blog.bodyContent, {
                allowedTags: []
              })
            });
          }
        });
      }
      return {
        authorData,
        authorPosts: JSON.stringify(authorPosts)
      };
    } catch (error) {
      // TODO: handle error
    }
  }
);

useHead({
  title: `${computedAuthorData.value?.firstName} ${computedAuthorData.value?.lastName} | Startup Graveyard`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: metaDescription.value
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `${computedAuthorData.value?.firstName} | Startup Graveyard`
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: metaDescription.value
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: computedAuthorData.value?.photoURL
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `https://startupgraveyard.africa/author/${computedAuthorData.value?.photoURL}`
    },
    {
      name: 'author',
      content: `${computedAuthorData.value?.firstName} ${computedAuthorData.value?.lastName}`
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
      content: `${computedAuthorData.value?.firstName} ${computedAuthorData.value?.lastName} | Startup Graveyard`
    },
    {
      property: 'twitter:description',
      content: metaDescription.value
    },
    {
      property: 'twitter:image',
      content: computedAuthorData.value?.photoURL
    }
  ]
});
</script>

<style lang="scss" scoped>
article {
  position: relative;
}
</style>
