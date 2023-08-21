import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    items: [],
  }),
  actions: {
    async fetchData() {
      const { data: mountains } = await useFetch(
        "https://api.nuxtjs.dev/mountains",
        {
          transform: (mountains) => {
            return mountains.map((mountain) => ({
              title: mountain.title,
              description: mountain.description,
              image: mountain.image,
            }));
          },
        }
      );
      this.items = mountains.value;
    },
  },
});
