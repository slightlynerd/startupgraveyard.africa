<template>
  <div>
    <author-bio :author="authorDetails?.data.authorData" />
    <hr class="my-5" />
    <section>
      <h2 class="h3 mb-4">
        Posts by {{ authorDetails?.data.authorData.firstName }} {{ authorDetails?.data.authorData.lastName }}
      </h2>
      <div class="row">
        <div
          v-for="item in JSON.parse(authorDetails?.data.authorPosts || '[]')"
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
import { FirestoreCollection, type IAuthor, type IBlog } from '~/models';

// common
const { $firestore } = useNuxtApp();
const route = useRoute();

// refs
const metaDescription = ref<string>('');

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
          where('author', '==', 'Karen Maina')
        )
      );
      let authorData: IAuthor = {} as IAuthor;
      let authorPosts: IBlog[] = [];
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
        data: { authorData, authorPosts: JSON.stringify(authorPosts) }
      };
    } catch (error) {
      // TODO: handle error
    }
  }
);

useHead({
  title: `${authorDetails.value?.data.authorData.firstName} ${authorDetails.value?.data.authorData.lastName} | Startup Graveyard`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: metaDescription.value
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `${authorDetails.value?.data.authorData.firstName} | Startup Graveyard`
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: metaDescription.value
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: authorDetails.value?.data.authorData.photoURL
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `https://startupgraveyard.africa/author/${authorDetails.value?.data.authorData.photoURL}`
    },
    {
      name: 'author',
      content: `${authorDetails.value?.data.authorData.firstName} ${authorDetails.value?.data.authorData.lastName}`
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
      content: `${authorDetails.value?.data.authorData.firstName} ${authorDetails.value?.data.authorData.lastName} | Startup Graveyard`
    },
    {
      property: 'twitter:description',
      content: metaDescription.value
    },
    {
      property: 'twitter:image',
      content: authorDetails.value?.data.authorData.photoURL
    }
  ]
});
</script>

<style lang="scss" scoped>
article {
  position: relative;
}
</style>
