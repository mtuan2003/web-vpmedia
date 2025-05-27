<script setup>
import Home from '../components/Home/HomeSection.vue'
import AboutUs from '../components/Home/AboutUs.vue'
import OurServices from '../components/Home/OurServices.vue'
import DevelopApp from '../components/Home/DevelopApp.vue'
import Hire from '../components/Home/Hire.vue'
import Guest from '../components/Home/Guest.vue'

import { onMounted } from 'vue'
onMounted(() => {
  // Prefetch sớm component Liên hệ
  import('../pages/ve-chung-toi.vue')
  import('../pages/lien-he.vue')
  import('../pages/phat-trien-ung-dung-va-games.vue')
  import('../pages/dich-vu-gia-tri-gia-tang.vue')
  import('../pages/van-hanh-he-thong.vue')
  import('../pages/thu-dien-tu.vue')
  import('../pages/tong-dai-tin-nhan.vue')
  import('../pages/tong-dai-voip.vue')
  import('../pages/cuoc-goi-thuong-hieu.vue')
  import('../pages/tin-nhan-sms.vue')
})
</script>

<template>
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
</template>