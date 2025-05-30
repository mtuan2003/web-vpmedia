<script setup>
const getImagePath = (index) => {
  return new URL(`/src/assets/img/partner/client-${index}.png`, import.meta.url).href;
};
</script>

<template>
    <section class="relative bg-[#fff] overflow-hidden z-1 pt-25 pb-17.5">
    <div class="container">
        <div class="max-md:mb-7.5 text-center mb-12.5 lh-normal">
            <h6 class="text-4 font-700 text-[#ec5a26] tracking-0.5px uppercase">Được tin tưởng bởi nhiều khách hàng</h6>
            <h2 class="text-8.25 font-900 text-[#0b0b31] [margin:10px_0_0_0] uppercase">Khách hàng của chúng tôi</h2>
        </div>
        <div class="flex flex-wrap mx--5px">
            <div v-for="i in 14" :key="i" href="#0" class="partner-item">
                <a class="partner-logo">
                    <img :src="getImagePath(i)" alt="image" />
                </a>
            </div>
        </div>
    </div>
  </section>
</template>