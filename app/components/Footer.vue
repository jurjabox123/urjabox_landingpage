<template>
  <footer class="w-full bg-white">
    <div class="max-w-7xl mx-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        <!-- First Column -->
        <div>
          <h3 class="text-2xl font-semibold mb-5">Urjabox</h3>
          <ul class="space-y-2 text-base font-light">
            <li><a href="#" class="hover:underline">For Business</a></li>
            <li><a href="#" class="hover:underline">Careers</a></li>
            <li><a href="#" class="hover:underline">Blog</a></li>
            <li><a href="#" class="hover:underline">FAQs</a></li>
            <li><a href="#" class="hover:underline">Sustainability</a></li>
          </ul>
        </div>

        <!-- Second Column -->
        <div>
          <h3 class="text-2xl font-semibold mb-5">The Urjabox Family</h3>
          <ul class="space-y-2 text-base font-light">
            <li><a href="#" class="hover:underline">Urjabox Technology</a></li>
            <li><a href="#" class="hover:underline">urUjabox</a></li>
          </ul>
        </div>

        <!-- Third Column -->
        <div>
          <h3 class="text-2xl font-semibold mb-5">Never Miss Out</h3>
          <p class="text-base font-normal mb-4">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div class="text-sm text-gray-500 mt-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
        </div>
      </div>

      <!-- Thicker Border Above Social Media Links -->
     <div>
      <div class="absolute left-0 w-screen border-t-[3px] border-black pt-8">
     </div>
        <div class="flex justify-between items-center mt-1">
          <div class="text-sm">
            Urjabox 2025+
          </div>
          <div class="flex space-x-4 text-sm mt-1">
            <a href="#" class="hover:underline">Privacy Policy</a>
            <a href="#" class="hover:underline">Terms & Conditions</a>
          </div>
          <div class="flex space-x-3 mt-2">
            <!-- WhatsApp Icon with Click Event -->
            <!-- <a href="https://wa.me/yourwhatsapplink" target="_blank"
              @click.prevent="loadWatiScript"
              class="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
              <MessageCircle class="w-4 h-4" />
            </a> -->
            <a href="https://www.instagram.com/urjaboxindia/"
              class="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
              <Instagram class="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/urjabox/?viewAsMember=true"
              class="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
              <Linkedin class="w-4 h-4" />
            </a>
            <a href="#" class="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
              <Facebook class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Instagram, Linkedin } from 'lucide-vue-next'
import { onMounted } from 'vue'

onMounted(() => {
  if (document.getElementById('wati-widget-script')) return; // Prevent duplicate script loading

  var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?48924';
  var s = document.createElement('script');
  s.id = 'wati-widget-script';
  s.type = 'text/javascript';
  s.async = true;
  s.src = url;

  var options = {
    "enabled": true,
    "chatButtonSetting": {
      "backgroundColor": "#00e785",
      "ctaText": "Chat with us",
      "borderRadius": "25",
      "marginLeft": "0",
      "marginRight": "20",
      "marginBottom": "20",
      "ctaIconWATI": false,
      "position": "right"
    },
    "brandSetting": {
      "brandName": "Wati",
      "brandSubTitle": "undefined",
      "brandImg": "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
      "welcomeText": "Hi there!\nHow can I help you?",
      "messageText": "Hello, %0A I have a question about {{page_link}}",
      "backgroundColor": "#00e785",
      "ctaText": "Chat with us",
      "borderRadius": "25",
      "autoShow": true,
      "phoneNumber": "919220641222"
    }
  };

  s.onload = function () {
    CreateWhatsappChatWidget(options);
  };

  document.body.appendChild(s);
});
</script>
