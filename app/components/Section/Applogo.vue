<template>
  <!-- Wrapper to Center the Section -->
  <div class="justify-center min-h-[50vh] pl-[1.5rem]">
    <!-- Top Section -->
    <div
      class="h-[450px] w-[2000px] flex md:flex-row items-center justify-center bg-gradient-to-r from-orange-400 to-white rounded-lg p-4 shadow-lg mt-[4rem]"
    >
      <div class="container py-8 grid md:grid-cols-2 gap-10 items-center">
        <!-- Left: Download App -->
        <div class="text-left">
          <h2 class="text-4xl md:text-5xl font-semibold text-gray-900 leading-snug">
            Download the
            <span class="text-black font-extrabold">URJABOX</span> app before your battery gets discharged.
          </h2>
          <div class="mt-6 flex gap-4">
            <img 
              src="https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/appstore.png" 
              alt="App Store" 
              class="h-[190px] w-[170px]" 
            />
            <img 
              src="https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/playstore.png" 
              alt="Google Play" 
              class="h-[190px] w-[170px]" 
            />
          </div>
        </div>

        <!-- Right: Product Image -->
        <div class="flex justify-center">
          <img 
            src="https://imagelandingpage.s3.ap-south-1.amazonaws.com/images/powerbank.png" 
            alt="Urjabox Device" 
            class="w-[406px] h-[406px]" 
          />
        </div>
      </div>
    </div>
  </div>
</template>
