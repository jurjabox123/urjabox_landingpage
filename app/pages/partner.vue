<template>
  <div class="pt-10 pb-20 bg-white">
    <!-- Partner Logos Marquee -->
     <div class="text-center mt-5"> 
      <h2 class="text-5xl font-bold mb-8 text-gray-900">A Partner to Market Leaders</h2>
     </div>
    <div class="marquee mb-16">
      <div class="marquee-content" :style="{ animationDuration: duration + 's' }">
        <div v-for="(logo, index) in logos" :key="index" class="marquee-item">
          <img :src="logo.src" :alt="logo.alt" class="partner-logo" />
        </div>
        <!-- Duplicate for smooth looping -->
        <div v-for="(logo, index) in logos" :key="'duplicate-' + index" class="marquee-item">
          <img :src="logo.src" :alt="logo.alt" class="partner-logo" />
        </div>
      </div>
    </div>

    <!-- What is Urjabox Section -->
    <div class="mt-[6rem] flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-[2.5rem]">
      <!-- Image -->
      <div class="w-full md:w-1/2">
        <img src="/assets/images/newcabinet.png" alt="Urjabox Station" class="rounded-lg shadow-lg mx-auto w-full max-w-[35rem]" />
      </div>

      <!-- Content -->
      <div class="w-full md:w-1/2 md:pl-4 mt-6 md:mt-8 text-center md:text-left">
        <h2 class="text-3xl md:text-4xl font-bold mb-3 text-gray-900">What is Urjabox?</h2>
        <p class="text-gray-900 text-xl md:text-2xl leading-9 md:leading-[3rem] max-w-[40rem]">
          Urjabox Power Technologies Pvt. Ltd. revolutionizes mobile charging with its smart
          power bank rental service, keeping users powered anytime, anywhere.
        </p>
        <p class="text-gray-900 text-xl md:text-2xl leading-9 md:leading-[3rem] max-w-[40rem]">
          With a growing network of self-service rental stations at high-footfall locations like
          airports, malls, and cafes, Urjabox offers a hassle-free, app-driven solution for renting,
          charging, and returning power banks—an affordable, flexible alternative to traditional charging.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const logos = [
  { src: 'https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/pizzahut.png', alt: 'Pizza Hut', class: 'logo-pizzahut' },
  { src: 'https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/mcdonalds.png', alt: "McDonald's", class: 'logo-mcdonalds' },
  { src: 'https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/chaayos.png', alt: 'Chaayos', class: 'logo-chaayos' },
  { src: 'https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/fortis.png', alt: 'Fortis', class: 'logo-fortis' },
  { src: 'https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/burgerclub.png', alt: 'The Burger Club', class: 'logo-burgerclub' },
  { src: 'https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/dominos.png', alt: "Domino's", class: 'logo-dominos' },
  { src: 'https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/costacoffee.png', alt: 'Costa Coffee', class: 'logo-costacoffee' },
  { src: 'https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/appolohospital.png', alt: 'Apollo Hospital', class: 'logo-apollo' },
  { src: 'https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/maxhospital.png', alt: 'Max Hospital', class: 'logo-max' },
  { src: 'https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/barbecue.png', alt: 'Barbecue', class: 'logo-barbecue' },
];

// Calculate animation duration dynamically
const totalWidth = logos.length * 160;
const speed = 50; // Pixels per second
const duration = totalWidth / speed;
</script>

<style scoped>
.marquee {
  overflow: hidden;
  white-space: nowrap;
}

.marquee-content {
  display: inline-flex;
  animation: scroll linear infinite;
}

.marquee-item {
  flex: 0 0 auto;
  margin-right: 70px;
}

.partner-logo {
  height: 170px;
  max-width: 150px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
}

.partner-logo:hover {
  transform: scale(1.1);
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
