<script setup>
import Footer from '../src/components/Home/Footer.vue'
import NavBar from '../src/components/Home/NavBar.vue'

</script>

<template>
  <!-- nav bar -->
  <NavBar/>
    <router-view />
  <!-- section footer(end) -->
  <Footer/>
</template>
