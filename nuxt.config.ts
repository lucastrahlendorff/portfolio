// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
  ],

  site: {
    url: 'https://luca-strahlendorff.de',
  },

  compatibilityDate: '2024-08-30',
})