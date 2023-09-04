// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    autoImports: ["useMainStore", ["useMainStore", "useMainStore"]],
  },
  runtimeConfig: {
    public: {
      baseURL: "https://dummyjson.com/",
    },
  },
});
