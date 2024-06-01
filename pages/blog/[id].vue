<template>
  <article>
    <img
      v-if="computedBlogData?.headerImage"
      class="blog-image"
      :src="computedBlogData.headerImage.url"
      :alt="computedBlogData?.headerImage?.alt || computedBlogData?.title"
    >
    <div class="row gx-0">
      <div class="blog-content">
        <blog-article :blog-data="computedBlogData" :datetime="datetime" />

        <h6 class="mt-5">
          Share this article
        </h6>

        <share-buttons :blog-data="computedBlogData" />

        <div id="disqus_thread" ref="disqusContainer" />
      </div>

      <div class="blog-sidebar col-lg-4">
        <p class="h6 text-uppercase fw-bold mb-3">
          Recent Posts
        </p>
        <div class="row gy-4 gx-0">
          <blog-card
            v-for="blog in computedRecentBlogPosts"
            :key="blog.id"
            :blog
          />
        </div>
      </div>
    </div>

    <div
      v-if="isNewsletterVisible"
      id="newsletterModal"
      class="modal fade show"
      tabindex="-1"
      aria-labelledby="newsletterModalLabel"
      role="dialog"
      data-bs-keyboard="false"
      aria-modal="true"
      style="display: block;"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title h5 fw-bold">
              Get weekly updates on tech startups in Africa
            </h1>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="isNewsletterVisible = false"
            />
          </div>
          <div class="modal-body">
            <substack-iframe />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import {
  doc,
  getDoc,
  collection,
  query,
  limit,
  getDocs,
  orderBy
} from 'firebase/firestore';
import { format } from 'date-fns';
import sanitizeHtml from 'sanitize-html';
import { useIntersectionObserver } from '@vueuse/core';

// models
import {
  FirestoreCollection,
  type IBlog,
  type IAuthor,
  META_DESCRIPTION_LENGTH
} from '@/models';

// utils
import { jsonToObject } from '@/utils';

// common
const { $firestore } = useNuxtApp();
const route = useRoute();

// constants
const MAX_RECENT_POSTS = 3;
const NO_OF_POSTS_TO_FETCH = 4;
const PAGE_IDENTIFIER = `https://startupgraveyard.africa/blog/${route.params.id}`;

// refs
const datetime = ref<string>();
const metaDescription = ref<string>('');
const isNewsletterVisible = ref<boolean>(false);
const disqusContainer = ref<HTMLElement | null>(null);

// computed
const computedBlogData = computed(() => blogData.value?.blogData);
const computedRecentBlogPosts = computed(() =>
  jsonToObject(blogData.value?.recentBlogPosts || '[]'));

// fetch blog data
const { data: blogData } = await useAsyncData(
  route.params.id.toString(),
  async () => {
    const articleRef = doc(
      $firestore,
      FirestoreCollection.Blog,
      route.params.id.toString()
    );
    const recentPostsQuery = query(
      collection($firestore, FirestoreCollection.Blog),
      orderBy('createdAt', 'desc'),
      limit(NO_OF_POSTS_TO_FETCH)
    );
    let blogData: IBlog | undefined;
    try {
      const articleSnap = await getDoc(articleRef);
      const recentPostsQuerySnapshot = await getDocs(recentPostsQuery);
      let recentBlogPosts: IBlog[] = [];

      if (articleSnap.exists()) {
        // fetch author data
        const authorSnap = await getDoc(doc(
          $firestore,
          FirestoreCollection.Authors,
          articleSnap.data()?.author
        ));
        const author = authorSnap.data() as IAuthor;
        blogData = {
          ...articleSnap.data(),
          author,
          createdAt: format(
            new Date(articleSnap.data()?.createdAt.toDate()),
            'MMMM d, yyyy'
          )
        } as IBlog;
        datetime.value = new Date(
          articleSnap.data()?.createdAt.toDate()
        ).toISOString();
        metaDescription.value = `${sanitizeHtml(blogData.bodyContent, {
          allowedTags: []
        }).substring(0, META_DESCRIPTION_LENGTH)}... ${blogData.title}`;
      }

      recentPostsQuerySnapshot.forEach((doc) => {
        if (doc.data() && doc.id !== route.params.id) {
          const blog = doc.data() as IBlog;
          recentBlogPosts.push({
            ...blog,
            id: doc.id,
            bodyContent: sanitizeHtml(blog.bodyContent, {
              allowedTags: []
            })
          });
        }
      });

      if (recentBlogPosts?.length > MAX_RECENT_POSTS) {
        recentBlogPosts = recentBlogPosts.slice(0, MAX_RECENT_POSTS);
      }

      return {
        blogData,
        recentBlogPosts: JSON.stringify(recentBlogPosts)
      };
    } catch (error) {
      // TODO: handle error
    }
  }
);

// lifecycle hooks
onMounted(() => {
  let newsletterStore = sessionStorage.getItem('newsletter') || 'false';
  const { stop } = useIntersectionObserver(
    disqusContainer,
    ([{ isIntersecting }]) => {
      if (newsletterStore === 'true') {
        return stop();
      }
      if (isIntersecting) {
        isNewsletterVisible.value = isIntersecting;
        newsletterStore = 'true';
        sessionStorage.setItem('newsletter', 'true');
        stop();
      }
    }
  );

  // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars
  const disqus_config = function (this: any) {
    this.page.url = PAGE_IDENTIFIER;
    this.page.identifier = route.params.id;
  };

  (function () {
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://startupgraveyard-africa.disqus.com/embed.js';
    s.setAttribute('data-timestamp', new Date().toString());
    (d.head || d.body).appendChild(s);
  })();
});

useHead({
  title: computedBlogData.value?.title,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: metaDescription.value
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: computedBlogData.value?.title
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: metaDescription.value
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: computedBlogData.value?.headerImage?.url
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: PAGE_IDENTIFIER
    },
    {
      name: 'author',
      content: `${computedBlogData.value?.author.firstName} ${computedBlogData.value?.author.lastName}`
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
      content: computedBlogData.value?.title
    },
    {
      property: 'twitter:description',
      content: metaDescription.value
    },
    {
      property: 'twitter:image',
      content: computedBlogData.value?.headerImage?.url
    }
  ],
  script: [
    { src: 'https://platform.twitter.com/widgets.js' }
  ]
});
</script>

<style lang="scss" scoped>
article {
  position: relative;

  .modal {
    background-color: rgba(0, 0, 0, 0.5);

    .modal-content {
      background-color: $sg-body-bg;
    }
  }

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
