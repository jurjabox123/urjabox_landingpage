<script setup>
import cabinetImage from '@/assets/images/Maskgroup.png';
</script>

<template>
  <section class="relative text-center bg-white">
    <!-- Heading with Less Upper Space -->
    <div class="pt-[5rem] pb-[2rem]  ">
      <h2 class="text-5xl  font-bold text-gray-900">
        Solution to Your Problem:
      </h2>
      <p class="text-4xl  text-gray-700 mt-1 tracking-wide">
        ANYTIME, ANYWHERE!
      </p>
    </div>

    <!-- Background Image Section with Decreased Height -->
    <div 
      class="relative w-full bg-cover bg-center flex items-center justify-center h-[300px] md:h-[400px] custom-md-height"
      :style="{ backgroundImage: `url(${cabinetImage})` }"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  </section>
</template>

<style scoped>
/* Ensures the background image covers the section */
.bg-cover {
  background-size: cover;
  background-position: center;
}

/* Custom media query for increasing height on larger screens */
@media (min-width: 768px) {
  .custom-md-height {
    height: 780px !important;
  }
}
</style>
