// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    // key
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@vueuse/nuxt',

    // ui
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',

    // util
    '@prisma/nuxt',
    '@sidebase/nuxt-auth',
  ],

  routeRules: {
    '/': { prerender: true },
  },

  runtimeConfig: {
    auth: {
      secret: '',
      provider: {
        github: {
          id: '',
          secret: '',
        },
      },
    },
  },

  // disable auto import
  imports: {
    scan: false,
  },
  components: {
    dirs: [],
  },

  // detailed module config
  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser':
          './node_modules/.prisma/client/index-browser.js',
      },
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './components/_common',
  },
  colorMode: {
    classSuffix: '',
    storage: 'cookie',
  },
  auth: {
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'github',
      addDefaultCallbackUrl: true,
    },
    globalAppMiddleware: true,
  },
})
