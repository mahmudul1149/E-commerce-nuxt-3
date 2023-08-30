<template>
  <div v-if="pending" class="flex justify-center items-center h-screen text-xl">
    Loading ...
  </div>
  <div v-else class="grid grid-cols-[250px,auto]">
    <div class="bg-black p-2">
      <div class="mt-16">
        <div
          class="flex gap-2 items-center bg-red-800 text-white mb-2 p-1 rounded"
        >
          <img src="../../assets/images/category.png" alt="" />
          <h1 class="">Category</h1>
        </div>

        <select
          name=""
          id=""
          v-model="selectedCategory"
          class="w-full p-1 rounded"
        >
          <option value="">All</option>
          <option v-for="category in categories" :key="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>
    <div class="bg-gray-200 pt-16 p-10 overflow-auto h-screen">
      <div>
        <div>
          <input
            class="block bg-white border-gray w-full text-sm text-slate-500 p-3 mb-4 border-slate-900 rounded focus:outline-none rounded-full"
            type="text"
            name=""
            id=""
            placeholder="Search "
            v-model="newval"
          />
        </div>

        <div
          class="grid grid-cols-5 gap-4 max-[1240px]:grid-cols-3 max-[600px]:grid-cols-1"
        >
          <div
            v-for="product in filterdItems"
            :key="product.id"
            class="p-4 bg-slate-50 shadow-lg hover:shadow-2xl transition ease-in-out delay-150 rounded"
          >
            <img class="w-80 h-40 object-contain" :src="product.image" alt="" />
            <h2 class="truncate text-green-600">{{ product.title }}</h2>
            <NuxtLink :to="`/products/${product.id}`"
              ><button
                class="font-sans antialiased text-black border-current border text-base w-90 text-2xl p-2 rounded-full mt-1"
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
const newval = ref("");
const selectedCategory = ref("");
const {
  data: products,
  pending,
  error,
} = await useLazyFetch("https://fakestoreapi.com/products", {
  lazy: true,
  server: false,
});
console.log(products);
const categories = computed(() => [
  ...new Set(products.value.map((val) => val.category)),
]);
console.log(categories);
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
