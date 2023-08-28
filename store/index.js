import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    items: [],
    user: null,
    error: "",
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
    async login(email, password) {
      const router = useRouter();
      const auth = getAuth();

      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = user;
        router.push("/products");
      } catch (error) {
        console.log(error);
        this.error = "Login failed !";
      }
    },
  },
});
