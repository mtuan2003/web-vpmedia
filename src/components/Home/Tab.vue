<template>
    <div class="tab solutions-list-tab font-[quicksand]">
      <ul class="tabs active">
        <li
          v-for="(tab, idx) in tabs"
          :key="idx"
          :class="currentIndex === idx ? 'current' : ''"
        >
        <a class="no-underline cursor-pointer" @click="changeTab(idx)"><span>{{ tab.label }}</span></a>
        </li>
      </ul>
  
      <div class="tab_content">
        <transition :name="transitionName" mode="default">
            <div :key="currentIndex" class="tabs_item">
                <slot :name="tabs[currentIndex].slot" />
            </div>
        </transition>
      </div>
    </div>
  </template>
  
<script setup>
import { computed, ref } from 'vue'
  
const props = defineProps({
    tabs: {
      type: Array,
      required: true,
      // Example: [{ label: 'Tab 1', slot: 'tab1' }, { label: 'Tab 2', slot: 'tab2' }]
    }
  })
  
const currentIndex = ref(0)
const previousIndex = ref(0)

  // Tính toán hiệu ứng chuyển động
const transitionName = computed(() => {
  return currentIndex.value > previousIndex.value ? 'slide-up' : 'slide-down'
})

function changeTab(newIndex) {
  previousIndex.value = currentIndex.value
  currentIndex.value = newIndex
}
</script>
<style scoped>
/* Slide Up Animation */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
  /* overflow: hidden; */
}
.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 1;
}
.slide-up-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-up-leave-to {
  transform: translateY(-100%);
  opacity: 1;
}

/* Slide Down Animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s ease;
  /* overflow: hidden; */
}
.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 1;
}
.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-down-leave-to {
  transform: translateY(100%);
  opacity: 1;
}
</style>