<template>
    <section class="py-12 px-6 bg-white">
      <!-- Title -->
      <h2 class="text-center text-[44px] font-semibold text-gray-900 mb-6">Our Top Most Urjabox Users</h2>
  
      <!-- Battery Container -->
      <div class="relative flex justify-center items-center border-4 border-black rounded-lg p-6 w-full max-w-4xl mx-auto">
        <!-- Battery Body -->
        <div class="flex justify-center items-center gap-6">
          <div
            v-for="(user, index) in users"
            :key="index"
            class="w-[247px] h-[332px] bg-gradient-to-br from-orange-300 to-orange-600 rounded-lg shadow-lg flex flex-col items-center justify-center"
          >
            <img :src="user.image" alt="User" class="w-20 h-20 rounded-full mb-2 border-2 border-white shadow-md" />
            <p class="text-sm font-semibold text-white">{{ user.name }}</p>
          </div>
        </div>
  
         <!-- Battery End Cap (Increased Size) -->
      <div class="absolute right-[-50px] top-1/2 transform -translate-y-1/2 w-[50px] h-[275px] border-4 border-black rounded-md bg-white"></div>
      </div>
    </section>
  </template>
  
  <script setup>
  const users = [
    { name: "John Doe", image: "https://picsum.photos/50/50?random=1" },
    { name: "Jane Smith", image: "https://picsum.photos/50/50?random=2" },
    { name: "Alice Brown", image: "https://picsum.photos/50/50?random=3" },
  ];
  </script>
  