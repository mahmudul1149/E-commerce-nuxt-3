// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "useMainStore", // import { defineStore } from 'pinia'
      ["useMainStore", "useMainStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
