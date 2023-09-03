import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    items: [],
    user: null,
    error: "",
    wishlist: [],
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
        router.push("/");
      } catch (error) {
        console.log(error);
        this.error = "Login failed !";
      }
    },
    async initializeWishlist() {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        this.wishlist = JSON.parse(storedWishlist);
      }
    },
    async addToWishlist(product) {
      const record = this.wishlist.find((item) => item.id === product.id);
      if (record) {
        record.quantity++;
      } else {
        this.wishlist.push({ ...product, quantity: 1 });
      }
      this.saveWishlistToStorage();
    },

    async saveWishlistToStorage() {
      localStorage.setItem("wishlist", JSON.stringify(this.wishlist));
    },

    setUser(user) {
      this.user = user;
    },

    clearUser() {
      this.user = null;
    },
  },
});
