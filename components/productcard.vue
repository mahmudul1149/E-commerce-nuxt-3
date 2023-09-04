<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-2xl">
      <div class="grid grid-cols-2 gap-4">
        <div class="">
          <img
            class="w-[200-px] h-[400px] object-contain"
            :src="product.thumbnail"
            alt=""
          />
        </div>
        <div class="pt-4">
          <h2 class="text-2xl">{{ product.title }}</h2>
          <p class="text-xl text-[#F85606]">
            <span class="text-3xl">৳</span> {{ product.price }}
          </p>
          <p class="font-bold border-b-2 pb-2 mb-2">product description</p>
          <p>{{ product.description }}</p>
          <button
            @click="addItem(product)"
            class="font-sans bg-[#F57224] hover:bg-[#D0611E] antialiased text-white border-red-300 border shadow-md text-base w-90 text-sm px-4 py-1 mt-4 rounded-full mt-1 text-lg transition ease-in-out delay-150"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/store/index";
const store = useMainStore();
const { product } = defineProps(["product"]);
const wishlist = store.wishlist;
const addItem = async (item) => {
  await store.addToWishlist(item);
};
</script>

<style></style>
