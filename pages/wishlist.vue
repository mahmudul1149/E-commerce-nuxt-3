<template>
  <div class="pt-16">
    <div>Get Data:</div>
  </div>
</template>
<script setup>
import { useMainStore } from "@/store/index";
const mainStore = new useMainStore();
onMounted(() => {
  mainStore.initializeWishlist();
});
</script>
