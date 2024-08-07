<template>
  <NuxtLayout>
    <p class="note mb-4">
      A catalogue of African startups and products that have shut down. This
      website serves as a graveyard for these fallen ventures, documenting their
      shortcomings so future entrepreneurs can avoid the same pitfalls and build
      even greater successes.
    </p>

    <section>
      <h2 class="h6 text-uppercase fw-bold mb-3">
        Most Recent Shutdowns
      </h2>
      <startup-list
        :list="computedStartups"
        :total="sortedStartups.length"
        :show-total="false"
      />
      <div class="text-center mt-5">
        <nuxt-link
          to="/startups"
          class="btn text-uppercase d-inline-block"
          @mousedown="logAnalyticsEvent('view_all_startups');"
          @touchstart="logAnalyticsEvent('view_all_startups');"
        >
          View all startups
        </nuxt-link>
      </div>
    </section>

    <featured-posts-section :posts="computedFeaturedPosts" />

    <section class="mt-5 pt-5">
      <h2 class="h6 text-uppercase fw-bold mb-2">
        Recent Posts
      </h2>
      <div class="row">
        <div
          v-for="blog in computedRecentPosts"
          :key="blog.id"
          class="col-md-4 mb-4"
        >
          <blog-card :blog="blog" />
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import { collection, query, limit, getDocs, orderBy, where } from 'firebase/firestore';
import sanitizeHtml from 'sanitize-html';

import { startups as allStartups } from '~/assets/data';

// models
import * as Models from '@/models';

// utils
import { logAnalyticsEvent, jsonToObject } from '@/utils';

// common
const { $firestore } = useNuxtApp();

// constants
const MIN_BLOG_POSTS = 3;
const sortedStartups: Models.IStartup[] = allStartups
  .sort((a, b) => +new Date(b.shutdownDate) - +new Date(a.shutdownDate))
  .map(item => ({
    ...item,
    shutdownDate: format(new Date(item.shutdownDate), 'MMM. yyyy')
  }));

// computed
const computedStartups = computed(() =>
  sortedStartups
    .slice(0, Models.DEFAULT_PAGE_SIZE)
);
const computedRecentPosts = computed(() =>
  jsonToObject(posts.value?.recentPosts || '') as Models.IBlog[]
);
const computedFeaturedPosts = computed(() =>
  jsonToObject(posts.value?.featuredPosts || '') as Models.IBlog[]
);

// fetch posts data
const { data: posts } = await useAsyncData(
  'posts',
  async () => {
    const recentPostsQuery = query(
      collection($firestore, Models.FirestoreCollection.Blog),
      orderBy('createdAt', 'desc'),
      limit(MIN_BLOG_POSTS)
    );
    const featuredPostsQuery = query(
      collection($firestore, Models.FirestoreCollection.Blog),
      where('featured', '==', true),
      limit(Models.FEATURED_POSTS_COUNT)
    );
    const recentPostsQuerySnapshot = await getDocs(recentPostsQuery);
    const featuredPostsQuerySnapshot = await getDocs(featuredPostsQuery);
    const recentPosts: Models.IBlog[] = [];
    const featuredPosts: Models.IBlog[] = [];

    recentPostsQuerySnapshot.forEach((doc) => {
      if (doc.data()) {
        const blog = doc.data() as Models.IBlog;
        recentPosts.push({
          ...blog,
          id: doc.id,
          createdAt: format(blog.createdAt.toDate(), 'MMMM dd, yyyy'),
          bodyContent: sanitizeHtml(blog.bodyContent, {
            allowedTags: []
          })
        });
      }
    });

    featuredPostsQuerySnapshot.forEach((doc) => {
      if (doc.data()) {
        const blog = doc.data() as Models.IBlog;
        featuredPosts.push({
          ...blog,
          id: doc.id,
          createdAt: format(blog.createdAt.toDate(), 'MMMM dd, yyyy'),
          bodyContent: sanitizeHtml(blog.bodyContent, {
            allowedTags: []
          })
        });
      }
    });

    return {
      recentPosts: JSON.stringify(recentPosts),
      featuredPosts: JSON.stringify(featuredPosts)
    };
  }
);

useHead({
  title: 'Startup Graveyard: Cataloguing Failure for Future Success',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      charset: 'utf-8'
    },
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge'
    },
    {
      name: 'description',
      content: 'A catalogue of startups that operated on the African continent which have shut down their services. This website serves as a graveyard for these fallen ventures, documenting their shortcomings so future entrepreneurs can avoid the same pitfalls and build even greater successes.'
    },
    {
      name: 'keywords',
      content: 'startup graveyard, africa startup graveyard, african startups that shut down, failed startups in africa'
    },
    {
      name: 'revisit-after',
      content: '1 day'
    },
    {
      name: 'author',
      content: 'Kelvin Gobo'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://startupgraveyard.africa'
    },
    {
      property: 'og:title',
      content: "Africa's Startups Graveyard"
    },
    {
      property: 'og:description',
      content: 'A catalogue of startups that operated on the African continent which have shut down their services. This website serves as a graveyard for these fallen ventures, documenting their shortcomings so future entrepreneurs can avoid the same pitfalls and build even greater successes.'
    },
    {
      property: 'og:image',
      content: 'https://startupgraveyard.africa/graveyard.jpeg'
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
      content: "Africa's Startups Graveyard"
    },
    {
      property: 'twitter:description',
      content: 'A catalogue of startups that operated on the African continent which have shut down their services. This website serves as a graveyard for these fallen ventures, documenting their shortcomings so future entrepreneurs can avoid the same pitfalls and build even greater successes.'
    },
    {
      property: 'twitter:image',
      content: 'https://startupgraveyard.africa/graveyard.jpeg'
    }
  ]
});
</script>

<style lang="scss" scoped>
.note {
  max-width: 75%;
  font-size: 1.15rem;
}

@media (max-width: 768px) {
  .note {
    max-width: 100%;
  }
}
</style>
