<template>
  <div v-if="loading" class="flex justify-center items-center h-screen text-xl">
    Loading ...
  </div>
  <div v-else class="grid grid-cols-[250px,auto] max-[1200px]:grid-cols-1">
    <div class="bg-[#333333] p-2 max-[1200px]:hidden">
      <Category :categories="categories" v-model="selectedCategory" />
    </div>
    <div class="bg-gray-200 pt-20 p-20 overflow-auto h-screen 1">
      <div>
        <div>
          <input
            class="block border border-yellow-500 w-full text-sm text-slate-500 p-3 mb-4 placeholder-slate-800 focus:outline-none rounded rounded-3xl"
            type="text"
            name=""
            id=""
            placeholder="Search for items"
            v-model="newval"
          />
        </div>

        <div
          class="grid grid-cols-6 gap-4 max-[1240px]:grid-cols-3 max-[600px]:grid-cols-1"
        >
          <div
            v-for="product in filterdItems"
            :key="product.id"
            class="p-4 bg-slate-50 hover:shadow-2xl transition ease-in-out delay-150 rounded"
          >
            <img
              class="w-80 h-40 object-contain"
              :src="product.thumbnail"
              alt=""
            />
            <h2 class="truncate text-blue-950 mb-1">{{ product.title }}</h2>
            <NuxtLink v-if="mainStore.user" :to="`/products/${product.id}`"
              ><button
                class="font-sans antialiased text-red-500 border-red-300 border shadow-md text-base w-90 text-sm px-2 py-1 rounded-full mt-1"
              >
                View Details
              </button></NuxtLink
            >

            <NuxtLink v-else to="/signin"
              ><button
                class="font-sans antialiased text-red-500 border-red-300 border shadow-md text-base w-90 text-sm px-2 py-1 rounded-full mt-1"
              >
                View Details
              </button></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $axios } = useNuxtApp();

import Category from "@/components/category";
import { useMainStore } from "@/store/index";
const mainStore = useMainStore();
const newval = ref("");
const loading = ref(false);
const selectedCategory = ref("");
const products = ref([]);

const fetchData = async () => {
  try {
    loading.value = true;
    const { data } = await $axios.get("/products");
    console.log(data.products);
    products.value = data.products;
  } catch (error) {
    throw error;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});

const categories = computed(() => [
  ...new Set(products.value.map((val) => val.category)),
]);
const filterdItems = computed(() => {
  if (!selectedCategory.value && !newval.value) {
    return products.value;
  } else {
    return products.value.filter((product) => {
      const categoryMatch =
        !selectedCategory.value || product.category === selectedCategory.value;
      const searchMatch =
        !newval.value ||
        product.title.toLowerCase().includes(newval.value.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }
});
</script>
