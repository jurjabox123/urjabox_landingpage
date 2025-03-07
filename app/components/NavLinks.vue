<script setup>
defineProps({
    hideContactUs: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <ul>
        <li class="row width100"><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
        <li class="row width100"><NuxtLink to="#about-us" class="nav-link">About Us</NuxtLink></li>
        <li class="row width100"><NuxtLink to="#services" class="nav-link">Services</NuxtLink></li>
        <li class="row width100"><NuxtLink to="#how-to-use" class="nav-link">How to Use</NuxtLink></li>
        <li class="row width100"><NuxtLink to="" class="nav-link contact-us orange-btn radius-20" v-if="!hideContactUs">Contact Us</NuxtLink></li>
    </ul>
</template>

<style lang="scss" scoped>
ul {
    li {
        white-space: nowrap;
        cursor: pointer;
    }
}
</style>