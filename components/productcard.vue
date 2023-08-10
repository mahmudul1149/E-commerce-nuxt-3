<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-5xl">
      <div class="grid grid-cols-2 gap-10">
        <div class="">
          <img class="mx-auto" :src="product.image" alt="" />
        </div>
        <div class="pt-4">
          <h2 class="text-2xl">{{ product.title }}</h2>
          <p class="text-xl">price - ${{ product.price }}</p>
          <p class="font-bold border-b-2 pb-2 mb-2">product description</p>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style></style>
