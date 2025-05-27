<template>
    <div class="tab font-[quicksand]">
      <ul class="tabs active">
        <li
          v-for="(tab, idx) in tabs"
          :key="idx"
          class="max-sm:!w-100% max-sm:!mr-0"
          :class="currentIndex === idx ? 'current' : ''"
        >
        <a class="no-underline cursor-pointer" @click="currentIndex = idx"><span>{{ tab.label }}</span></a>
        </li>
      </ul>
  
      <div class="tab_content">
        <div v-for="(tab, idx) in tabs" :key="idx">
          <transition :name="slide" @before-enter="beforeEnter"
          @enter="enter" @after-enter="afterEnter" mode="default"
          @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
            <div v-show="currentIndex === idx" ref="tabRefs" class="tabs_item">
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