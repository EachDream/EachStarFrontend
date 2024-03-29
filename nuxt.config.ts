// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  imports: {
    presets: [
      {
        from: "vue-i18n",
        imports: ["useI18n"],
      },
    ],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
    "@formkit/auto-animate",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],
});
