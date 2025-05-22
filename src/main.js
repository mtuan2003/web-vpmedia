import { createApp } from 'vue'
import App from '../src/App.vue'
// add import router
import router from './router'
import VueParticles from '@tsparticles/vue3'
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// unocss
import 'uno.css'
import '../src/assets/fonts/quicksand.css'
import '../src/assets/css/style.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/responsive.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).use(VueParticles, {
    init: async engine => {
      await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    },
  }).mount('#app')
router.afterEach((to) => {
  document.title = to.meta.title || 'VPMEDIA - VIET PHAT Communication Technology Joint Stock Company'
})