import { createApp } from 'vue'
import '../style.css'
import Operate from '../components/van-hanh-he-thong.vue'
import VueParticles from '@tsparticles/vue3'
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// css
import 'uno.css'
import '../assets/css/animate.min.css'
import '../assets/css/flaticon.css'
import '../assets/css/bootstrap.min.css'
import '../assets/fonts/quicksand.css'
// check
import '../assets/css/magnific-popup.min.css'
import '../assets/css/meanmenu.css'
import '../assets/css/nice-select.min.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/swiper.min.css'
import '../assets/css/responsive.css'
// js
import '../assets/js/jquery.min.js'
import '../assets/js/main.js' // main

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

createApp(Operate).component('font-awesome-icon', FontAwesomeIcon).use(VueParticles, {
    init: async engine => {
      await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    },
  }).mount('#app')
