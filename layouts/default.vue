<template>
  <div>
    <Header />
    <slot />
    <AppFooter v-if="showFooter" />
  </div>
</template>
<script setup>
import Header from "../components/Header.vue";
import AppFooter from "../components/appFooter.vue";
const route = useRoute();

const showFooter = computed(() => {
  const excludedPaths = ["/signin", "/signup"];
  return !excludedPaths.includes(route.path);
});
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
