<template>
  <div class="relative w-full py-[2rem] text-center vision-section">
    <h2 class="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
      Our Vision & Mission
    </h2>

    <div class="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12">
      <!-- Text Section -->
      <div class="md:w-[35%] w-full text-left mb-8 md:mb-0">
        <p class="text-black text-lg md:text-3xl p-[2rem] tracking-[0.03em] leading-normal">
          Our vision is to empower individuals and businesses alike with seamless, on-the-go power solutions.
          We are driven by innovation, aiming to revolutionize how the world stays connected by providing
          reliable and accessible charging options.

          Our commitment is to enhance productivity, support a mobile lifestyle, and lead the charge toward a
          future where everyone stays powered, connected, and unstoppable-no matter where they are.
        </p>
      </div>

      <!-- Swiper Carousel -->
      <div class="md:w-[60%] w-full flex flex-col items-center">
          <swiper-container ref="containerRef" :init="false" class="flex flex-wrap  ">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx"
              style="background-color: rgb(32, 233, 70); color: white;">
              <img :src="slide.image" class="w-[220px] h-[280px] object-cover">
            </swiper-slide>
          </swiper-container>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

// Reference to the swiper container
const containerRef = ref(null);

// Slides data
const slides = [
  { image: "https://fastly.picsum.photos/id/1015/600/400.jpg?hmac=tPonaXlfk6h4b60UAWLppeEvDelLS838XzWucEdHk5o" },
  { image: "https://fastly.picsum.photos/id/1020/600/400.jpg?hmac=PPj6tRvCC2emb9O0Z36dHmJM1EBg04og4wUl1HF1w64" },
  { image: "https://fastly.picsum.photos/id/1035/600/400.jpg?hmac=mnooh0fwG-2MIGW-xTUcYO6wyyx9LNdZK4RM6R2SA7A" },
  { image: "https://fastly.picsum.photos/id/1043/600/400.jpg?hmac=rKJ3oNfUiQwN0IYb8WLuldI1d5yxsuYCXHzWfJ8SwH4" },
  { image: "https://fastly.picsum.photos/id/1069/600/400.jpg?hmac=mbFphiWcoBFGQUYZvuuYfYR7-5RwR9FuBn5MB4lJ41I" }
];

const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})

onMounted(() => {
  console.log(swiper.instance)
})
</script>

<style scoped>
.vision-section {
  background-image: url('/_nuxt/assets/images/Rectangle71.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>