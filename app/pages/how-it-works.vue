<template>
  <section class="py-12 px-6 bg-white">
    <h2 class="text-center text-4xl font-bold text-gray-900 mb-8">How it Works</h2>

    <!-- Battery-Shaped Container -->
    <div class="relative flex flex-col items-center justify-center max-w-5xl mx-auto border-4 border-black rounded-lg p-8">
      
      <!-- Battery End Cap (Increased Size) -->
      <div class="absolute right-[-50px] top-1/2 transform -translate-y-1/2 w-[50px] h-[275px] border-4 border-black rounded-md bg-white"></div>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden 
                 transition-transform hover:scale-105 hover:shadow-xl"
        >
          <img :src="step.image" :alt="step.label" class="w-[220px] h-[280px] object-cover">
          <div class="bg-orange-500 w-full text-center py-3 text-white font-semibold text-lg">
            {{ step.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import scan from '@/assets/images/scan.png';
import pay from '@/assets/images/pay.png';
import charge from '@/assets/images/charge.png';
import ret from '@/assets/images/return.png';

const steps = [
  { label: "SCAN", image: scan },
  { label: "PAY", image: pay },
  { label: "CHARGE", image: charge },
  { label: "RETURN", image: ret },
];
</script>
