<script setup>
import headerImage from "@/assets/images/header.jpg";
import ubLogo from "@/assets/images/urjabox.png";
import { defineProps } from "vue";

const props = defineProps({
  showBackground: {
    type: Boolean,
    default: true, // By default, background will show
  },
});
</script>

<template>
  <div class="relative w-full">
    <!-- Fixed Navigation Bar -->
    <nav class="fixed top-0 left-0 w-full flex justify-between items-center p-6 text-white bg-black bg-opacity-70 backdrop-blur-md z-50">
      <!-- Logo Section -->
      <div class="flex flex-col items-center justify-center space-y-1 ml-6">
        <img :src="ubLogo" alt="UB Logo" class="h-16 w-auto filter brightness-0 invert">
        <span class="text-4xl font-bold tracking-wide">Urjabox</span>
      </div>
      <!-- Navigation Items -->
      <div class="flex items-center space-x-8 mr-10 text-lg font-medium">
        <ul class="flex space-x-10 text-2xl font-semibold">
          <li><NuxtLink to="/" class="hover:text-orange-400 transition">Home</NuxtLink></li>
          <li><a href="/partner" class="hover:text-orange-400 transition">About Us</a></li>
          <li><a href="/categories" class="hover:text-orange-400 transition">Categories</a></li>
          <li><a href="/how-it-works" class="hover:text-orange-400 transition">How to Use</a></li>
          <li><a href="/career" class="hover:text-orange-400 transition">Career</a></li>
        </ul>
        <button @click="$router.push('/contact-us')"
          class="px-6 py-3 border border-white rounded-full text-2xl font-semibold hover:bg-white hover:text-black transition">
          CONTACT US
        </button>
      </div>
    </nav>

    <!-- Conditional Background Section -->
    <div v-if="props.showBackground" class="w-full bg-cover bg-center flex items-center mt-24"
      :style="{ backgroundImage: `url(${headerImage})`, height: '500px' }">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  </div>
</template>
