<script setup>
import Header from '~/components/Header.vue';
import HowitWorks from '~/pages/how-it-works.vue';
import Categories from '~/pages/categories.vue';
import OurPresence from '~/components/Section/OurPresence.vue';
import Partner from '~/pages/partner.vue';
import ProductUsageTutorial from '~/components/Section/ProductUsageTutorial.vue';
import Solution from '~/components/Section/Solution.vue';
import Applogo from '~/components/Section/Applogo.vue';
import UrjaboxUsers from '~/components/Section/UrjaboxUsers.vue';
import Vision from '~/components/Section/Vision.vue';
</script>

<template>
  <div>
    <Header />
    <div id="partner">
      <Partner />
    </div>
    <Vision />
    <Solution />
    <OurPresence />
    <div id="categories">
      <Categories />
    </div>
    <div id="how-it-works">
      <HowitWorks />
    </div>
    <ProductUsageTutorial />
    <UrjaboxUsers />
    <Applogo />
    <Footer />
  </div>
</template>