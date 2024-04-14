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
  routeRules: {
    '/': { prerender: true }
  },
  sitemap: {
    hostname: 'https://startupgraveyard.africa',
    gzip: true,
    routes: [
      '/',
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
