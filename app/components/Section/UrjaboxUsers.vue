<template>
  <section class="py-12 px-6">
    <!-- Title -->
    <h2 class="text-center text-[36px] font-semibold text-gray-900 mb-12">
      Our Top Most Urjabox Users
    </h2>

    <!-- Cards -->
    <div class="flex justify-center items-center gap-12 flex-wrap">
      <div
        v-for="(user, index) in users"
        :key="index"
        class="w-[350px] h-[410px] bg-[#F9BDA0] rounded-xl shadow-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
      >
        <!-- User Image -->
        <img
          :src="user.image"
          alt="User"
          class="w-26 h-26 rounded-full mb-4 border-4 border-white shadow-md"
        />
        <!-- Name -->
        <p class="text-xl font-bold text-gray-900">{{ user.name }}</p>
        <!-- Role -->
        <p class="text-sm text-gray-800 mb-4">{{ user.role }}</p>
        <!-- Testimonial -->
        <p class="text-lg text-gray-700">{{ user.testimonial }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const users = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    testimonial:
      "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration.",
    image: "https://picsum.photos/100/100?random=1",
  },
  {
    name: "David Patel",
    role: "Project Manager",
    testimonial:
      "I've tested numerous options, but one stands out for its intuitive design and comprehensive functionality.",
    image: "https://picsum.photos/100/100?random=2",
  },
  {
    name: "Emily Carter",
    role: "Operations Manager",
    testimonial:
      "The tool we adopted has surpassed our expectations, providing invaluable insights and support.",
    image: "https://picsum.photos/100/100?random=3",
  },
  {
    name: "Michael Lee",
    role: "Marketing Lead",
    testimonial:
      "Urjabox has completely streamlined our campaigns, making it easier to track and improve performance.",
    image: "https://picsum.photos/100/100?random=4",
  },
];
</script>
