<template>
  <div class="mt-20">
    <div
      class="flex gap-2 items-center bg-[#0074A2] text-white mb-2 p-1 rounded"
    >
      <img src="../assets/images/category.png" alt="" />
      <h1>Category</h1>
    </div>
    <div class="mt-2">
      <select
        name=""
        id=""
        :value="modelValue"
        @input="updateSelectedCategory($event.target.value)"
        class="w-full p-1 rounded"
      >
        <option value="">All</option>
        <option v-for="category in categories" :key="category">
          {{ category }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const props = defineProps({
  modelValue: String,
  categories: Array,
});
const emit = defineEmits(["update:modelValue"]);

const updateSelectedCategory = (value) => {
  emit("update:modelValue", value);
};
</script>
