<template>
  <div>
    <Header />
  </div>
  <div class="max-w-2xl mx-auto p-6">
    <h2 class="text-2xl font-semibold text-center mb-6">
      Sign up today to better your customer experience
    </h2>
    <form class="space-y-4">
      <!-- First and Last Name -->
      <div class="flex flex-col md:flex-row gap-4">
        <input type="text" placeholder="*First Name" class="border rounded px-3 py-2 w-full" />
        <input type="text" placeholder="*Last Name" class="border rounded px-3 py-2 w-full" />
      </div>

      <!-- Business Name -->
      <input type="text" placeholder="*Business Name" class="border rounded px-3 py-2 w-full" />

      <!-- Job Title -->
      <input type="text" placeholder="*Job Title" class="border rounded px-3 py-2 w-full" />

      <!-- Phone Number -->
      <input type="tel" placeholder="*Phone Number" class="border rounded px-3 py-2 w-full" />

      <!-- Email -->
      <input type="email" placeholder="*Email" class="border rounded px-3 py-2 w-full" />

      <!-- Shopping Mall Dropdown -->
      <select class="border rounded px-3 py-2 w-full">
        <option>Shopping Mall</option>
        <option>Mall 1</option>
        <option>Mall 2</option>
      </select>

      <!-- Business Model Dropdown -->
      <select class="border rounded px-3 py-2 w-full">
        <option>*Select your desired business model</option>
        <option>Model 1</option>
        <option>Model 2</option>
      </select>

      <!-- City -->
      <input type="text" placeholder="*City" class="border rounded px-3 py-2 w-full" />

      <!-- State -->
      <input type="text" placeholder="*State" class="border rounded px-3 py-2 w-full" />

      <!-- Number of Store Locations -->
      <input type="text" placeholder="Number of Store Locations (Optional)" class="border rounded px-3 py-2 w-full" />
      <!-- Submit Button -->
      <div class="flex justify-center">
        <button type="submit"
          class="w-[297px] bg-orange-500 text-white py-3 rounded font-semibold text-base hover:bg-orange-600 transition">
          SUBMIT
        </button>
      </div>
    </form>
  </div>
  <div>
    <Footer />
  </div>
</template>

<script setup>
// Add any necessary logic later if required
</script>

<style scoped>
/* Optional: Adjust spacing/padding as per your needs */
</style>