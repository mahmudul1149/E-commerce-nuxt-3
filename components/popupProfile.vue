<template>
  <div class="bg-white-300 pd-3">
    <p class="text-[#181313] font-bold">
      {{ user.displayName }}
    </p>
    <p class="text-black">{{ user.email }}</p>
    <button
      @click="handleLogOut"
      class="font-sans bg-[#000061] text-white w-full py-2 mt-2 rounded border-none transition ease-in-out delay-150 hover:bg-[#ADEAFF] hover:text-black"
    >
      Logout
    </button>
  </div>
</template>

<script setup>
import { useMainStore } from "@/store/index";

const mainStore = useMainStore();

const user = computed(() => {
  return mainStore.user || {};
});
const handleLogOut = async () => {
  try {
    await mainStore.logout();
  } catch (error) {}
};
</script>

<style></style>
