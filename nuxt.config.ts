// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo.png'
        }
      ]
    }
  },
  build: {
    transpile: ['bootstrap']
  },
  devtools: { enabled: true },
  plugins: [
    '~/plugins/bootstrap.client',
    '~/plugins/date-picker.client',
    '~/plugins/firebase',
    '~/plugins/vue-select.client'
  ],
  modules: ['@nuxtjs/sitemap', '@pinia/nuxt'],
  // TODO: fix issue with prerendering
  routeRules: {
    '/': { prerender: true },
    '/startups': { prerender: true }
  },
  site: {
    url: 'https://startupgraveyard.africa'
  },
  sitemap: {
    hostname: 'https://startupgraveyard.africa',
    gzip: true,
    routes: [
      '/',
      '/startups',
      '/blog',
      '/blog/**'
    ]
  },
  sourcemap: {
    client: false,
    server: false
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";'
        }
      }
    }
  }
});
