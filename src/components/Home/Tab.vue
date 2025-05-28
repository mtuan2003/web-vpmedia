<template>
    <div class="tab font-[quicksand]">
      <ul class="tabs md-max-lg:justify-left active">
        <li
          v-for="(tab, idx) in tabs"
          :key="idx"
          class="md-max-lg:mr-15px md-max-lg:ml-0 max-sm:!w-100% max-sm:!mr-0 max-md:![flex:unset] max-md:![max-width:unset] max-md:!pt-15px max-md:!mr-15px"
          :class="currentIndex === idx ? 'current' : ''"
        >
        <a class="no-underline cursor-pointer max-md:!px-10 md-max-lg:!px-10px md-max-lg:!py-18px" @click="currentIndex = idx"><span>{{ tab.label }}</span></a>
        </li>
      </ul>
  
      <div class="tab_content">
        <div v-for="(tab, idx) in tabs" :key="idx">
          <transition name="slide" @before-enter="beforeEnter"
          @enter="enter" @after-enter="afterEnter" mode="default"
          @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
            <div v-show="currentIndex === idx" ref="tabRefs" class="tabs_item px-3">
              <slot :name="tab.slot" />
            </div>
          </transition>
        </div>
        
      </div>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue'
  
const props = defineProps({
    tabs: {
      type: Array,
      required: true,
      // Example: [{ label: 'Tab 1', slot: 'tab1' }, { label: 'Tab 2', slot: 'tab2' }]
    }
  })
  
const currentIndex = ref(0)
const tabRefs = ref([]) // refs for each tab

// Slide down
function beforeEnter(el) {
  el.style.display = 'block'
  el.style.height = '0'
  el.style.paddingTop = '0'
  el.style.paddingBottom = '0'
  el.style.marginTop = '0'
  el.style.marginBottom = '0'
  el.style.overflow = 'hidden'
}

function enter(el) {
  const h = el.scrollHeight + 'px'
  el.style.transition = 'all 0.5s ease'
  el.style.height = h
  el.style.paddingTop = ''
  el.style.paddingBottom = ''
  el.style.marginTop = ''
  el.style.marginBottom = ''
}

function afterEnter(el) {
  el.style.height = ''
  el.style.overflow = ''
  el.style.transition = ''
}

// Slide up
function beforeLeave(el) {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
}

function leave(el) {
  // trigger reflow
  void el.offsetHeight
  el.style.transition = 'all 0.5s ease'
  el.style.height = '0'
  el.style.paddingTop = '0'
  el.style.paddingBottom = '0'
  el.style.marginTop = '0'
  el.style.marginBottom = '0'
}

function afterLeave(el) {
  el.style.display = 'none'
  el.style.height = ''
  el.style.overflow = ''
  el.style.transition = ''
}
</script>