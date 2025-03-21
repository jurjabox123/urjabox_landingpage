<template>
  <section class="py-16 px-6 bg-white">
    <!-- Title -->
    <h2 class="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10">
      Product Usage Tutorial
    </h2>

    <!-- Grid Container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[3rem] max-w-[107rem] mx-auto">
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="flex items-center justify-center p-4 bg-gradient-to-br from-orange-300 to-orange-500 rounded-xl transition-transform transform hover:scale-105"
      >
        <!-- Video -->
        <video
          class="w-full h-[220px] md:h-[250px] rounded-md"
          controls
          :poster="video.poster"
        >
          <source :src="video.src" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>

<script setup>
const videos = [
  { src: "https://www.w3schools.com/html/mov_bbb.mp4", poster: "https://via.placeholder.com/300x200?text=Video+1" },
  { src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", poster: "https://via.placeholder.com/300x200?text=Video+2" },
  { src: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", poster: "https://via.placeholder.com/300x200?text=Video+3" },
];
</script>
