import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const baseUrl = nuxtApp.$config.public.baseURL;
  console.log(baseUrl);

  let api = axios.create({
    baseURL: baseUrl,
    headers: {
      common: {},
    },
  });

  return {
    provide: {
      axios: api,
    },
  };
});
