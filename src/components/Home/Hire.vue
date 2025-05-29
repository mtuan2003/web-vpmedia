<template>
    <section class="hire-before bg-[url(/src/assets/img/banner-bg.jpg)] relative z-1 bg-[position:center-center] bg-[length:cover] bg-no-repeat text-center px-0 py-70px">
    <div class="container">
        <div class="row">
            <div class="col-66lg lg:!ml-16.66666667%">
                <h6 class="h-24px text-4 font-700 text-[#ec5a26] tracking-0.5px uppercase">Hợp tác cùng chúng tôi?</h6>
                <h2 class="max-xs:text-30px text-33px text-[#fff] m-0 font-700 uppercase">Ứng dụng công nghệ để nâng cao trải nghiệm</h2>
                <p class="text-[#fff] text-17.7px mt-20px mb-0 ml-0 mr-0 max-lg:text-15px">
                    Chúng tôi tận dụng sức mạnh công nghệ để mang đến giải pháp tối ưu, giúp doanh nghiệp vận
                    hành hiệu quả, bảo mật và linh hoạt hơn. Cùng nhau, chúng ta có thể tạo ra những giá trị bền
                    vững và đột phá trong kỷ nguyên số.
                </p>
                <div class="mt-5 mr-3.75 max-md:ml-0">
                    <RouterLink to="/lien-he">
                        <a class="group [border:none] relative inline-block text-center overflow-hidden z-1 text-[#142b73] bg-[#ffffff] [transition:0.4s] rounded-3px font-600 text-4 px-35px py-14px [box-shadow:0_7px_25px_rgb(123,_104,_238,_0.25)] hover:text-[#ffffff] focus:text-[#ffffff] max-md:ml-2.5 no-underline font-[quicksand]"
                    @mouseenter="updatePosition"
                    @mouseleave="updatePosition" ref="buttonRef"
                    >Liên hệ với chúng tôi
                        <span ref="spanRef"
                        class="group-hover:w-225% group-hover:h-562.5px group-focus:w-225% group-focus:h-562.5px absolute block w-0 h-0 rounded-50% bg-[#3e57d0] ![transition:width_0.5s_ease-in-out,_height_0.5s_ease-in-out] ![transform:translate(-50%,-50%)] z--1 rounded-30px pointer-events-none transition-all duration-300"></span>
                    </a>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>

import { ref } from 'vue'

const buttonRef = ref(null)
const spanRef = ref(null)

const updatePosition = (e) => {
  const button = buttonRef.value
  const span = spanRef.value

  if (button && span) {
    const rect = button.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top
    span.style.left = `${relX}px`
    span.style.top = `${relY}px`
  }
}

</script>