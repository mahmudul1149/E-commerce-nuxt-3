<template>
  <div class="fixed inset-0 bg-[#C3C3C3] bg-opacity-50 z-50">
    <div
      class="absolute top-1/2 left-1/2 transform w-[450px] p-4 rounded bg-[#FFFFFF] -translate-x-1/2 -translate-y-1/2 -ms-transform -translate-x-1/2 -translate-y-1/2 z-50"
    >
      <div>
        <div
          class="flex items-center justify-between font-sans pb-2 mb-2 shadow"
          style="box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2)"
        >
          <h1>Add New Delivery Address</h1>
          <div>
            <img
              @click="hideOrderForm"
              class="w-4 h-4 cursor-pointer"
              src="@/assets/images/cross.png"
              alt=""
            />
          </div>
        </div>

        <div class="mb-2">
          <label for="#" class="text-sm text-[#424242]">Full Name</label>
          <input
            type="text"
            class="font-sans w-full text-[#9CACCB] focus:border-green-300 outline-none text-sm border border-slate-300 rounded py-2 px-2 mt-1"
            placeholder="Input full name"
          />
        </div>
        <div>
          <label for="#" class="text-sm text-[#424242]">Number</label>
          <input
            type="text"
            class="font-sans w-full text-[#9CACCB] focus:border-green-300 outline-none text-sm border border-slate-300 rounded py-2 px-2 mt-1"
            placeholder="Number"
          />
        </div>

        <div>
          <label for="#" class="text-sm text-[#424242]">Province</label>
          <select
            name=""
            class="font-sans text-[#9CACCB] w-full focus:border-green-300 outline-none text-sm border border-slate-300 rounded py-2 px-2 mt-1"
            id=""
          >
            <option value="" disabled selected hidden class="">
              Please choose your province
            </option>

            <option
              class="font-sans w-full focus:border-green-300 outline-none text-sm border border-slate-300 rounded py-2 px-2 mt-1"
              value=""
              v-for="province in provinces"
              :key="province"
            >
              {{ province }}
            </option>
          </select>
        </div>
        <div class="text-right mt-4">
          <button
            class="bg-[#F85606] text-white w-[150px] py-1 rounded text-center"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["toggleOrderForm"]);
const provinces = ref([
  "Dhaka",
  "Barishal",
  "Chattogram",
  "Khulna",
  "Rajshahi",
  "Rangpur",
  "Mymensingh",
  "Sylhet",
]);
const hideOrderForm = () => {
  emit("toggleOrderForm");
};
</script>

<style></style>
