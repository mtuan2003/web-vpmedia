<template>
    <section class="about-section section-padding">
    <div class="container">
        <div class="row d-flex align-items-center">
            <div class="col-lg-6 col-md-12">
                <div class="about-content">
                    <h6>Về chúng tôi</h6>
                    <h2>VPMEDIA</h2>
                    <p>
                        VPMEDIA là công ty hoạt động trong lĩnh vực viễn thông và CNTT được thành lập để trở thành
                        doanh nghiệp hàng đầu trong lĩnh vực cung cấp dịch vụ gia tăng viễn thông trên Internet và
                        di động tại Việt Nam. Khách hàng biết đến chúng tôi là nhà cung cấp các giải pháp phần mềm
                        sáng tạo và đáng tin cậy cho thị trường Viễn thông trong nước cũng như vươn ra ngoài thế
                        giới.
                    </p>
                    <div class="about-btn-box">
                        <a class="default-btn project-btn-1 no-underline"
                        @mouseenter="updatePosition"
                        @mouseleave="updatePosition" ref="buttonRef"
                        href="/ve-chung-toi">Xem thêm
                        <span ref="spanRef" class="absolute pointer-events-none transition-all duration-300"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="about-image">
                    <img src="/src/assets/img/about.jpg" alt="About image">
                    <div class="sub-content">
                        <img src="/src/assets/img/about-sub.jpg" alt="About Images">
                        <div class="text-left">
                            <h3>12</h3>
                            <span class="font-[quicksand]">Năm xây dựng và đổi mới</span>
                        </div>
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