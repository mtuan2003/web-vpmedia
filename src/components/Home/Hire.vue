<template>
    <section class="hire-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-12">
                <div class="hire-content">
                    <h6 class="h-24px">Hợp tác cùng chúng tôi?</h6>
                    <h2>Ứng dụng công nghệ để nâng cao trải nghiệm</h2>
                    <p>
                        Chúng tôi tận dụng sức mạnh công nghệ để mang đến giải pháp tối ưu, giúp doanh nghiệp vận
                        hành hiệu quả, bảo mật và linh hoạt hơn. Cùng nhau, chúng ta có thể tạo ra những giá trị bền
                        vững và đột phá trong kỷ nguyên số.
                    </p>

                    <div class="hire-btn">
                        <a class="default-btn-one no-underline"
                        @mouseenter="updatePosition"
                        @mouseleave="updatePosition" ref="buttonRef"
                        href="/lien-he">Liên hệ với chúng tôi
                        <span ref="spanRef"
                        class="absolute pointer-events-none transition-all duration-300"></span>
                        </a>
                    </div>
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