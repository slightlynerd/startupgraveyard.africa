// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
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
          content: 'startup graveyard, african startups, african startups, failed african startups, african startups that shut down, african startup funding, poor funding, macroeconomic issues, why startups fail, failed startups in africa, failed startups'
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
          content: 'https://twitter.com/slightlynerd'
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
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo.png'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
        }
      ],
      style: [],
      script: [],
      noscript: [],
      title: 'Startup Graveyard: Cataloguing Failure for Future Success'
    }
  },
  plugins: [
    '~/plugins/bootstrap.client',
    '~/plugins/date-picker.client',
    '~/plugins/firebase',
    '~/plugins/vue-select.client'
  ],
  modules: ['@nuxtjs/sitemap', '@pinia/nuxt'],
  sitemap: {
    hostname: 'https://startupgraveyard.africa',
    gzip: true,
    routes: [
      '/',
      '/blog',
      '/blog/**'
    ]
  }
});
