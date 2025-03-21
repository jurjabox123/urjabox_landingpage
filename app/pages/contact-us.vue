<template>
  <div class="min-h-screen">
    <!-- Header Navigation -->
    <div class="mb-[9rem]">
      <Header :showBackground="false" />
    </div>
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
            <form id="contact-form" action="https://formspree.io/f/xpwpzlag" method="POST" class="space-y-4">
              <div>
                <input type="text" name="name" placeholder="Name" class="w-full p-3 border border-gray-300 rounded"
                  required />
              </div>
              <div>
                <input type="email" name="email" placeholder="Email ID"
                  class="w-full p-3 border border-gray-300 rounded" required />
              </div>
              <div>
                <input type="tel" name="mobile" placeholder="Mobile Number"
                  class="w-full p-3 border border-gray-300 rounded" required />
              </div>
              <div>
                <textarea name="message" placeholder="Message" rows="4"
                  class="w-full p-3 border border-gray-300 rounded" required></textarea>
              </div>
              <div>
                <button type="submit"
                  class="w-[297px] bg-orange-500 text-white py-3 rounded font-semibold text-base hover:bg-orange-600 transition">
                  SUBMIT
                </button>
              </div>
            </form>
            <p id="success-message" class="text-green-600 mt-4 hidden">Message Sent Successfully!</p>

          </div>

        </div>
      </div>
    </main>

    <!-- Footer Section -->
    <footer class="max-w-6xl mx-auto py-8 px-4">
      <Footer />
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
import { onMounted } from "vue";

onMounted(() => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" },
        });

        if (response.ok) {
          successMessage.classList.remove("hidden");
          form.reset();
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.error || "Unable to send message"}`);
        }
      } catch (error) {
        alert("Network error. Please try again.");
      }
    });
  }
});

</script>