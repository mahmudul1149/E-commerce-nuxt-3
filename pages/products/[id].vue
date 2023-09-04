<template>
  <div>
    <Productcard :product="products" />
  </div>
</template>

<script setup>
const { $axios } = useNuxtApp();
import Productcard from "@/components/productcard";
const { id } = useRoute().params;
const products = ref({});

const getProductById = async () => {
  try {
    const { data } = await $axios.get(`/products/${id}`);
    products.value = data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

onMounted(() => {
  getProductById();
});
</script>
