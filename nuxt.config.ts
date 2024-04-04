// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  imports: {
    // presets: [
    //   {
    //     from: 'vue-i18n',
    //     imports: ['useI18n'],
    //   },
    // ],
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
    },
  },
  modules: [
    '@formkit/auto-animate',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
  ],
  eslint: {
    lintOnStart: false,
  },
})
