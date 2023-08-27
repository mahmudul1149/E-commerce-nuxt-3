<template>
  <div class="bg-gray-100 p-10 overflow-auto h-screen">
    <div
      v-if="pending"
      class="flex justify-center items-center h-screen text-xl"
    >
      Loading ...
    </div>
    <div v-else>
      <div>
        <input
          class="block border-2 border-slate-100 w-full text-sm text-slate-500 p-3 mb-4 border-slate-900 rounded"
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
          class="p-4 bg-white shadow-lg hover:shadow-2xl transition ease-in-out delay-150"
        >
          <img class="w-80 h-80" :src="product.image" alt="" />
          <h2 class="truncate py-2 text-center">{{ product.title }}</h2>
          <NuxtLink :to="`/products/${product.id}`"
            ><button
              class="font-sans font-semibold antialiased text-white text-base w-90 bg-blue-700 text-2xl w-full p-1 rounded mt-1"
            >
              View Details
            </button></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const newval = ref("");
let customError = null;
const {
  data: products,
  pending,
  error,
} = await useLazyFetch("https://fakestoreapi.com/products", {
  lazy: true,
  server: false,
});
const filterdItems = computed(() => {
  return products.value.filter((val) =>
    val.title.toLowerCase().includes(newval.value.toLowerCase())
  );
});

if (error.value) {
  customError = new Error("Custom error message here");
}
</script>

<style></style>
