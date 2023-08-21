<template>
  <div class="bg-gray-100 overflow-auto h-screen">
    <div class="container mx-auto mt-4">
      <div
        class="grid grid-cols-4 gap-4 max-[1240px]:grid-cols-3 max-[600px]:grid-cols-1"
      >
        <div
          v-for="(mountain, index) in items"
          :key="index"
          class="p-4 bg-white shadow-lg hover:shadow-2xl transition ease-in-out delay-150 rounded"
        >
          <img class="w-full h-80" :src="mountain.image" alt="" />
          <h2 class="truncate py-2 text-center">{{ mountain.title }}</h2>
          <h2 class="truncate py-2 text-center">{{ mountain.description }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/store/index";
const mainStore = new useMainStore();
const items = mainStore.items;
const { fetchData } = mainStore;
await fetchData();
</script>

<style></style>
