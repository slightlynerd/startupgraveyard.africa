<template>
  <article>
    <img
      v-if="blogData?.data.headerImage"
      class="blog-image"
      :src="blogData.data.headerImage.url"
      :alt="blogData?.data.headerImage?.alt || blogData?.data.title"
    >
    <div class="row gx-0">
      <div class="blog-content">
        <h1 class="mb-3">
          {{ blogData?.data.title }}
        </h1>
        <p class="mb-0">
          Written By: <span class="text-muted">{{ blogData?.data.author }}</span>
        </p>
        <p class="mb-3">
          <time :datetime="datetime">
            Published on:
            <span class="text-muted">{{ blogData?.data.createdAt }}</span>
          </time>
        </p>
        <div
          class="content"
          v-html="sanitizeHtmlContent(blogData?.data.bodyContent)"
        />
        <h6 class="mt-5">
          Share this article
        </h6>
        <share-buttons :blog-data="blogData?.data" />
      </div>
      <div class="blog-sidebar col-lg-4">
        <p class="h6 text-uppercase fw-bold mb-3">
          Recent Posts
        </p>
        <div class="row gy-4 gx-0">
          <blog-card v-for="blog in recentBlogPosts" :key="blog.id" :blog />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { doc, getDoc, collection, query, limit, getDocs, orderBy } from 'firebase/firestore';
import { format } from 'date-fns';
import sanitizeHtml from 'sanitize-html';

// models
import {
  FirestoreCollection,
  SANITIZE_HTML_OPTIONS,
  type IBlog,
  META_DESCRIPTION_LENGTH
} from '~/models';

// common
const { $firestore } = useNuxtApp();
const route = useRoute();

// constants
const MAX_RECENT_POSTS = 3;
const NO_OF_POSTS_TO_FETCH = 4;

// refs
const datetime = ref<string>();
const metaDescription = ref<string>('');
const recentBlogPosts = ref<IBlog[]>([]);

// methods
function sanitizeHtmlContent (content?: string): string {
  return content ? sanitizeHtml(content, SANITIZE_HTML_OPTIONS) : '';
}

// fetch blog data
const { data: blogData } = await useAsyncData(route.params.id.toString(), async () => {
  const articleRef = doc(
    $firestore,
    FirestoreCollection.Blog,
    route.params.id.toString()
  );
  let blog: IBlog | undefined;
  try {
    const articleSnap = await getDoc(articleRef);
    if (articleSnap.exists()) {
      blog = {
        ...articleSnap.data(),
        createdAt: format(
          new Date(articleSnap.data()?.createdAt.toDate()),
          'MMMM d, yyyy'
        )
      } as IBlog;
      datetime.value = new Date(
        articleSnap.data()?.createdAt.toDate()
      ).toISOString();
      metaDescription.value = `${sanitizeHtml(blog.bodyContent, {
        allowedTags: []
      }).substring(0, META_DESCRIPTION_LENGTH)}... ${blog.title}`;
      return {
        data: { ...blog }
      };
    }
  } catch (error) {
    // TODO: handle error
  }
});

// lifecycle hooks
onMounted(async () => {
  const q = query(
    collection($firestore, FirestoreCollection.Blog),
    orderBy('createdAt', 'desc'),
    limit(NO_OF_POSTS_TO_FETCH)
  );
  const querySnapshot = await getDocs(q);
  recentBlogPosts.value = [];

  querySnapshot.forEach((doc) => {
    if (doc.data() && doc.id !== route.params.id) {
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

  if (recentBlogPosts.value?.length > MAX_RECENT_POSTS) {
    recentBlogPosts.value = recentBlogPosts.value.slice(0, MAX_RECENT_POSTS);
  }
});

useHead({
  title: blogData.value?.data.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: metaDescription.value
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: blogData.value?.data.title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: metaDescription.value
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: blogData.value?.data.headerImage?.url
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `https://startupgraveyard.africa/blog/${route.params.id}`
    },
    {
      name: 'author',
      content: blogData.value?.data.author
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
      content: blogData.value?.data.title
    },
    {
      property: 'twitter:description',
      content: metaDescription.value
    },
    {
      property: 'twitter:image',
      content: blogData.value?.data.headerImage?.url
    }
  ],
  script: [{ src: 'https://platform.twitter.com/widgets.js' }]
});
</script>

<style lang="scss" scoped>
article {
  position: relative;

  .blog-image {
    width: 100%;
    max-height: 24rem;
    object-fit: cover;
  }

  .blog-content {
    position: relative;
    max-width: 60%;
    background-color: $sg-secondary-color;
    padding: 3rem;
    margin-left: 2rem;
    margin-top: -4rem;

    @media screen and (max-width: 992px) {
      max-width: 100%;
      margin-left: 0;
      margin-top: 0;
      padding: 2rem;
    }

    @media screen and (max-width: 600px) {
      padding: 1rem;
    }

    .content {
      p,
      img {
        margin-bottom: 1rem;
      }

      :deep(img) {
        max-width: 100%;
        height: 24rem;
        object-fit: contain;
      }

      :deep(p) {
        margin-bottom: 1rem;
        font-size: 1.15rem;
      }

      :deep(h1),
      :deep(h2),
      :deep(h3),
      :deep(h4),
      :deep(h5),
      :deep(h6) {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }

  .blog-sidebar {
    margin-left: 2rem;
    margin-top: 2rem;

    @media screen and (max-width: 992px) {
      margin-left: 0;
      margin-top: 4rem;
    }
  }
}
</style>
