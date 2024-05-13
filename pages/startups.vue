<template>
  <NuxtLayout>
    <startups-container />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Full catalog of African Startups that have shut down',
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
