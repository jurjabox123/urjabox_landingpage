<template>
  <div class="min-h-screen">
    <!-- Header Navigation -->
       <Header />
    <!-- Main Content with Gradient Background -->
    <main class="bg-gradient-to-r relative w-full py-[2rem] text-center vision-section">
      <div class="max-w-6xl mx-auto p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Left side - Image -->
          <div>
            <div class="rounded-lg shadow-md">
              <img src="assets/images/newcabinet.png" alt="Urjabox Charging Station" class="w-[599px] h-[px] rounded" />
            </div>
          </div>
          
          <!-- Right side - Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <form class="space-y-4">
              <div>
                <input type="text" placeholder="Name" class="w-full p-3 border border-gray-300 rounded" />
              </div>
              <div>
                <input type="email" placeholder="Email ID" class="w-full p-3 border border-gray-300 rounded" />
              </div>
              <div>
                <input type="tel" placeholder="Mobile Number" class="w-full p-3 border border-gray-300 rounded" />
              </div>
              <div>
                <textarea placeholder="Message" rows="4" class="w-full p-3 border border-gray-300 rounded"></textarea>
              </div>
              <div>
                <button type="submit" class="w-full bg-orange-500 text-white py-3 rounded font-medium hover:bg-orange-600 transition">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer Section -->
    <footer class="max-w-6xl mx-auto py-8 px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- First Column -->
        <div>
          <h3 class="font-bold mb-4">Urjabox</h3>
          <ul class="space-y-2 text-sm">
            <li>For Business</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Sustainability</li>
          </ul>
        </div>
        
        <!-- Second Column -->
        <div>
          <h3 class="font-bold mb-4">The Urjabox Family</h3>
          <ul class="space-y-2 text-sm">
            <li>Urjabox Technology</li>
            <li>urUjabox</li>
          </ul>
        </div>
        
        <!-- Third Column -->
        <div>
          <h3 class="font-bold mb-4">Never Miss Out</h3>
          <p class="text-sm mb-4">Join our newsletter to stay up to date on features and releases.</p>
          <div class="text-xs text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      
      <div class="border-t pt-6">
        <div class="flex justify-between items-center">
          <div class="flex space-x-2">
            <a href="#" class="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">T</a>
            <a href="#" class="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">G</a>
            <a href="#" class="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">P</a>
            <a href="#" class="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">F</a>
          </div>
          <div class="flex space-x-4 text-sm">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div class="text-sm">
            Urjabox 2025+
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.vision-section {
  background-image: url('/_nuxt/assets/images/Rectangle71.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

<script setup>
import ubLogo from '@/assets/images/urjabox.png'; // Adjust the path accordingly
</script>