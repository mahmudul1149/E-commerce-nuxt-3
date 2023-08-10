<template>
  <div>
    <Header />
    <slot />
  </div>
</template>
<script setup>
import Header from "../components/Header.vue";
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
