<template>
  <div class="bg-gray-100 p-10 overflow-auto h-screen">
    <div
      v-if="pending"
      class="flex justify-center items-center h-screen text-xl"
    >
      Loading ...
    </div>
    <div v-else>
      <div
        class="grid grid-cols-5 gap-4 max-[1240px]:grid-cols-3 max-[600px]:grid-cols-1"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="p-4 bg-white shadow-lg hover:shadow-2xl transition ease-in-out delay-150"
        >
          <img class="w-80 h-80" :src="product.image" alt="" />
          <h2 class="truncate py-2 text-center">{{ product.title }}</h2>
          <NuxtLink :to="`/${product.id}`"
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
const { pending, data: products } = await useFetch(
  "https://fakestoreapi.com/products",
  {
    lazy: true,
    server: false,
  }
);
</script>

<style></style>
