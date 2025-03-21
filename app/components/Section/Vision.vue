<template>
  <div class="relative w-full py-8 text-center vision-section">
    <h2 class="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
      Our Vision & Mission
    </h2>

    <div class="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-12 gap-8">
      <!-- Text Section -->
      <div class="md:w-1/2 w-full text-left mb-8 md:mb-0">
        <p class="text-black text-lg md:text-3xl p-8 tracking-wide leading-normal pl-8 ">
          At our core, we envision a world where power limitations never hinder human potential. We are dedicated to
          creating an ecosystem of seamless, accessible charging solutions that empowering individuals and businesses to
          maintain continuous connectivity and productivity.
          Our vision extends beyond mere convenience we aim to fundamentally transform how society interacts with power.
          We see ourselves developing innovative charging technologies that integrate naturally into daily life while
          creating reliable power solutions that work wherever our customers need them.
        </p>
      </div>

      <!-- Swiper Carousel -->
      <div class="md:w-1/2 w-full flex flex-col items-center">
        <swiper-container ref="containerRef" :init="false" effect="coverflow" :grab-cursor="true"
          :centered-slides="true" slides-per-view="auto" :loop="true"
          :autoplay="{ delay: 1000, disableOnInteraction: false }" :coverflow-effect="{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true
          }" :pagination="{ clickable: true }" class="w-full max-w-[600px]">
          <swiper-slide v-for="(slide, idx) in slides" :key="idx"
            class="rounded-lg overflow-hidden shadow-lg transition-transform duration-500 scale-90">
            <img :src="slide.image" class="w-[339px] h-[418px] object-cover" />
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Register Swiper
register();

const containerRef = ref<{ initialize: () => void } | null>(null);

// Slides
const slides = [
  { image: 'https://fastly.picsum.photos/id/1015/600/400.jpg?hmac=tPonaXlfk6h4b60UAWLppeEvDelLS838XzWucEdHk5o' },
  { image: 'https://fastly.picsum.photos/id/1020/600/400.jpg?hmac=PPj6tRvCC2emb9O0Z36dHmJM1EBg04og4wUl1HF1w64' },
  { image: 'https://fastly.picsum.photos/id/1035/600/400.jpg?hmac=mnooh0fwG-2MIGW-xTUcYO6wyyx9LNdZK4RM6R2SA7A' },
  { image: 'https://fastly.picsum.photos/id/1043/600/400.jpg?hmac=rKJ3oNfUiQwN0IYb8WLuldI1d5yxsuYCXHzWfJ8SwH4' },
  { image: 'https://fastly.picsum.photos/id/1069/600/400.jpg?hmac=mbFphiWcoBFGQUYZvuuYfYR7-5RwR9FuBn5MB4lJ41I' }
];

onMounted(() => {
  const swiperParams = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1.2,
      slideShadows: false,
    },
    pagination: {
      clickable: true,
    },
  };

  if (containerRef.value) {
    Object.assign(containerRef.value, swiperParams);
    containerRef.value.initialize();
  }
});
</script>

<style scoped>
.vision-section {
  background-image: url('/_nuxt/assets/images/Rectangle71.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
swiper-slide {
  width: 339px !important;
  height: 418px !important;
  border-radius: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
}

swiper-slide:not(.swiper-slide-active) img {
  opacity: 0.8;
  filter: brightness(0.9);
}
@media (max-width: 768px) {
  .vision-section {
    padding: 2rem 1rem;
  }
}
</style>
