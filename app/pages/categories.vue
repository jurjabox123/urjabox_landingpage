<template>
    <section class="py-12 px-6 bg-white">
      <h2 class="text-center text-3xl font-bold text-gray-900 mb-8">Our Categories</h2>
  
      <!-- Grid Container -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10  ps-[3rem] ">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="flex flex-col items-center text-center  bg-gradient-to-br bg-[#F6D9CA]
                rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-[292px] p-[3rem]"
        >
          <component :is="category.icon" class="w-14 h-14 text-black mb-4" />
          <p class="text-lg font-semibold text-black">{{ category.name }}</p>
          <p class="text-black opacity-90 mt-2 text-[20px]">
            {{ category.description }}
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import { Utensils, Beer, Coffee, Hospital, GraduationCap, School, Dumbbell, Bed, Calendar, Briefcase, Plane } from 'lucide-vue-next';
import { Flower } from 'lucide-vue-next';

  
  const categories = [
    { name: "Clubs and Bar", icon: Beer, description: "Guests stay powered up to share experiences and call rides home. UrjaBox encourages longer stays, more visits, and boosts social media engagement. " },
    { name: "Restaurants", icon: Utensils, description: "Guests can stay engaged without interruptions from dead phones. UrjaBox boosts satisfaction, encourages longer stays, and drives more sales and positive word-of-mouth." },
    { name: "Cafés & Bakeries", icon: Coffee, description: "UrjaBox helps customers relax and stay longer without worrying about their phone battery. This leads to more orders, happy customers, and repeat visits." },
    { name: "Hospitals", icon: Hospital, description: "UrjaBox ensures patients, visitors, and staff stay connected. It reduces frustration, improves satisfaction, and keeps communication flowing in high-demand environments."  },
    { name: "Colleges & Universities", icon: GraduationCap, description: "Students and faculty stay connected throughout the day with UrjaBox, increasing foot traffic to campus spots and enhancing the modern student experience." },
    { name: "Schools", icon: School, description: "Offering a charging station adds value to the shopping experience, showing that you care about customer convenience. " },
    { name: "Gyms & Fitness Centers", icon: Dumbbell, description: "Offering charging stations can create a modern, tech-savvy environment that appeals to a younger, more connected demographic." },
    { name: "Hotels & Resorts", icon: Bed, description: "Guests can easily charge their devices during check-ins, check-outs, or while relaxing in lobbies and lounges, improving their overall stay. ”" },
    { name: "Events & Conference Centers", icon: Calendar, description: "More charging options encourage attendees to stay longer and engage with event sponsors or vendors, helping increase visibility and interactions." },
    { name: "SPAs & Wellness Centers", icon: Flower, description: "Customers can focus on unwinding without the worry of a dead phone. Charging stations in lounge areas or while waiting for treatments adds to a seamless experience. " },
    { name: "Co-Working Spaces", icon: Briefcase, description: "Ensure your members never run out of battery during long hours of work. UrjaBox supports a seamless, uninterrupted working experience, keeping everyone connected." },
    { name: "Airports & Travel Stations", icon: Plane, description: "Travelers will spend more time in your airport or transit lounge, engaging with your retail stores, restaurants, and services while charging their devices." }
  ];
  </script>
  