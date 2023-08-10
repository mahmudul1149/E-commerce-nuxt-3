<template>
  <div>
    <Productcard :product="products" />
  </div>
</template>

<script setup>
import Productcard from "../components/productcard.vue";
const { id } = useRoute().params;
const { data: products } = await useFetch(
  `https://fakestoreapi.com/products/${id}`
);
</script>
