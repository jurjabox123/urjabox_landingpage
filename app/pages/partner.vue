<template>
  <div class="bg-white py-16 px-6 md:px-12">
    <!-- Partner Logos -->
    <div class="text-center">
      <h2 class="text-5xl font-bold mb-8 text-gray-900">A Partner to Market Leaders</h2>
      <div class="flex flex-wrap justify-center items-center gap-[2.5rem]">
        <img src="/assets/images/pizzahut.png" alt="Pizza Hut" class="partner-logo" />
        <img src="/assets/images/mcdonalds.png" alt="McDonald's" class="partner-logo" />
        <img src="/assets/images/chaayos.png" alt="Chaayos" class="partner-logo" />
        <img src="/assets/images/fortis.png" alt="Fortis" class="partner-logo" />
        <img src="/assets/images/burgerclub.png" alt="The Burger Club" class="partner-logo" />
        <img src="/assets/images/dominos.png" alt="Domino's" class="partner-logo" />
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

<style scoped>
/* Partner Logos */
.partner-logo {
  height: 80px;
  max-width: 140px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
}

.partner-logo:hover {
  transform: scale(1.1);
}

/* Adjust text size */
h2 {
  font-size: 2.75rem; /* Increased heading size */
}

/* Mobile adjustments */
@media (max-width: 900px) {
  .partner-logo {
    height: 100px;
    max-width: 150%;
    margin: 6px;
  }
  h2 {
    font-size: 2.25rem;
  }
}
</style>
