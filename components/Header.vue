<template>
  <header>
    <nav
      class="bg-[#0B2239] text-white border-gray-200 px-6 py-2 lg:px-6 fixed w-full"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen"
      >
        <NuxtLink href="/" class="flex items-center">
          <div class="from-pink-500 via-purple-500 to-indigo-500">
            <h1 class="text-2xl text-shadow-md italic">Shopping</h1>
          </div>
        </NuxtLink>
        <div class="flex items-center lg:order-2 gap-1">
          <div v-if="user">
            <NuxtLink
              href="/wishlist"
              class="relative text-slate-80 dark:text-white hover:bg-slate-950 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-4 lg:px-5 py-1 lg:py-1.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-white"
              >WishList

              <p
                class="absolute top-0 right-0 bg-green-300 rounded-full w-4 h-4 items-center justify-center flex text-black"
              >
                {{ mainStore.wishlist.length }}
              </p>
            </NuxtLink>
          </div>
          <div v-else>
            <NuxtLink
              href="/wishlist"
              class="relative text-slate-80 dark:text-white hover:bg-slate-950 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-4 lg:px-5 py-1 lg:py-1.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-white"
              >WishList
            </NuxtLink>
          </div>

          <NuxtLink
            v-if="!user"
            href="/signin"
            class="text-slate-80 dark:text-white hover:bg-slate-950 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-4 lg:px-5 py-1 lg:py-1.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-white"
            >Log In</NuxtLink
          >
          <NuxtLink
            v-if="!user"
            href="/signup"
            class="border-2 border-white text-slate-80 dark:text-white hover:bg-slate-950 focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-4 lg:px-5 py-1 lg:py-1.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-white"
            >Sign Up</NuxtLink
          >

          <div v-if="user" class="relative w-10 h-10">
            <div v-if="user.photoURL">
              <img
                class="w-10 h-10 rounded-full cursor-pointer"
                :src="user.photoURL"
                alt=""
                @click.stop="showPopUpProfileBox = !showPopUpProfileBox"
              />
            </div>
            <div v-else class="w-10 h-10 rounded-full">
              <img
                class="w-10 h-10 rounded-full cursor-pointer"
                src="https://deejayfarm.com/wp-content/uploads/2019/10/Profile-pic.jpg"
                alt=""
                @click.stop="showPopUpProfileBox = !showPopUpProfileBox"
              />
            </div>
            <popup-profile-box
              v-show="showPopUpProfileBox"
              @click="showPopUpProfileBox = !showPopUpProfileBox"
              class="block absolute bg-gray-100 p-2 min-w-[200px] min-h-[118px] top-[3rem] right-0 bottom-0 z-10 shadow-lg shadow-indigo-500/50"
            ></popup-profile-box>
          </div>

          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import PopupProfileBox from "@/components/popupProfile.vue";
import { useMainStore } from "@/store/index";

const mainStore = useMainStore();
const showPopUpProfileBox = ref(false);

const user = computed(() => {
  return mainStore.user;
});
</script>

<style></style>
