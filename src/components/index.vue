<script setup>
import Home from './Home/HomeSection.vue'
import AboutUs from './Home/AboutUs.vue'
import OurServices from './Home/OurServices.vue'
import DevelopApp from './Home/DevelopApp.vue'
import Hire from './Home/Hire.vue'
import Guest from './Home/Guest.vue'
import Footer from './Home/Footer.vue'
import NavBar from './Home/NavBar.vue'

</script>

<template>
    
  <!-- nav bar -->
  <NavBar/>
  <!-- Section Home -->
  <Home />
  <!-- section chúng tôi -->
  <AboutUs/>
  <!-- section cung cấp -->
  <OurServices/>
  <!-- section ứng dụng phát triển -->
  <DevelopApp/>
  <!-- section thuê -->
  <Hire/>
  <!-- section tin tưởng khách hàng -->
  <Guest/>
  <!-- section footer(end) -->
  <Footer/>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>