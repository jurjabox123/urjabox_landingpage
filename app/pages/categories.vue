<template>
  <section class="py-12 px-6 bg-white">
    <h2 class="text-center text-3xl font-bold text-gray-900 mb-8">Our Categories</h2>

    <!-- Grid Container -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-[110rem] mx-auto px-6">
      <div
        v-for="(category, index) in visibleCategories"
        :key="index"
        class="flex flex-col items-center text-center bg-gradient-to-br bg-[#F6D9CA]
              rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-[292px] p-[3rem]">
        <!-- Icon -->
        <component :is="category.icon" class="w-14 h-14 text-black mb-4" />
        <p class="text-lg font-semibold text-black">{{ category.name }}</p>
        <p class="text-black opacity-90 mt-2 text-[20px]">
          {{ category.description }}
        </p>
        <NuxtLink :to="category.link || '#'"
          class="bg-orange-400 hover:bg-orange-600 text-white flex justify-center items-center px-4 py-2 rounded-md font-semibold text-base leading-6 no-underline transition-all duration-300 shadow-sm mt-2"
          role="button">
          Learn More
        </NuxtLink>
      </div>
    </div>

    <!-- Load More Button -->
    <div class="flex justify-center mt-8">
      <button
        v-if="visibleCount < categories.length"
        @click="loadMore"
        class="bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-semibold text-base transition-all duration-300 shadow-sm"
      >
        Load More
      </button>

      <button
        v-else
        @click="showLess"
        class="bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-semibold text-base transition-all duration-300 shadow-sm"
      >
        Show Less
      </button>
    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  Utensils,
  Beer,
  Coffee,
  Hospital,
  GraduationCap,
  School,
  Dumbbell,
  Bed,
  Calendar,
  Briefcase,
  Plane,
  Flower
} from 'lucide-vue-next';

const categories = [
  {
    name: "Clubs and Bar",
    icon: Beer,
    description: "Guests stay powered up to share experiences and call rides home.",
    link: "/clubs-and-bar"
  },
  { name: "Restaurants", icon: Utensils, description: "Guests can stay engaged without interruptions from dead phones." },
  { name: "Cafés & Bakeries", icon: Coffee, description: "UrjaBox helps customers relax and stay longer without worrying about their phone battery." },
  { name: "Hospitals", icon: Hospital, description: "UrjaBox ensures patients, visitors, and staff stay connected." },
  { name: "Colleges & Universities", icon: GraduationCap, description: "Students and faculty stay connected throughout the day with UrjaBox." },
  { name: "Schools", icon: School, description: "Offering a charging station adds value to the shopping experience." },
  { name: "Gyms & Fitness Centers", icon: Dumbbell, description: "Offering charging stations can create a modern." },
  { name: "Hotels & Resorts", icon: Bed, description: "Guests can easily charge their devices during check-ins, check-outs." },
  { name: "Events & Conference Centers", icon: Calendar, description: "More charging options encourage attendees to stay longer." },
  { name: "SPAs & Wellness Centers", icon: Flower, description: "Customers can focus on unwinding without the worry of a dead phone." },
  { name: "Co-Working Spaces", icon: Briefcase, description: "Ensure your members never run out of battery during long hours of work." },
  { name: "Airports & Travel Stations", icon: Plane, description: "Travelers will spend more time in your airport or transit lounge." }
];

// Control visible categories
const visibleCount = ref(6); // Start with 6 categories (2 rows of 3 columns)

const visibleCategories = computed(() => categories.slice(0, visibleCount.value));

// Load More Function
const loadMore = () => {
  visibleCount.value += 6; // Load 6 more (2 rows)
};

// Show Less button
function showLess() {
  visibleCount.value = 6;
}
</script>
