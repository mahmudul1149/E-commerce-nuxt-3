<template>
  <div>
    <Productcard :product="products" />
  </div>
</template>

<script setup>
import Productcard from "@/components/productcard";
const { id } = useRoute().params;
const { data: products } = await useFetch(
  `https://fakestoreapi.com/products/${id}`
);
// if (!products.value) {
//   throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
// }
</script>
