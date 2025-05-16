<template>
<div class="contact-section section-padding">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title">
                    <h6>Liên hệ với chúng tôi</h6>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="contact-info-content">
                    <h5>Hà Nội</h5>
                    <p>Số 3 ngách 4 ngõ 163 Nguyễn Khang, phường Yên Hoà, Cầu Giấy, Hà Nội</p>
                    <a href="tel:+84902825586" class="no-underline color-[#0b0b31] font-[quicksand]">+84(0) 902 825 586</a>
                    <a href="mailto:support@vpmedia.vn" class="no-underline color-[#0b0b31] font-[quicksand]">support@vpmedia.vn</a>
                </div>
            </div>
            <div class="col-lg-6 offset-lg-1">
                <div class="contact-form font-[quicksand]">
                    <p class="form-message"></p>
                    <form id="contact-form" class="contact-form form">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <input type="text" name="name" id="name" class="form-control" required="" placeholder="Họ và tên">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <input type="email" name="email" id="email" class="form-control" required="" placeholder="Địa chỉ email">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <input type="text" name="phone" id="phone" required="" class="form-control" placeholder="Số điện thoại">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group">
                                    <input type="text" name="subject" id="subject" class="form-control" required="" placeholder="Tiêu đề">
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="form-group">
                                    <textarea name="message" class="form-control" id="message" cols="30" rows="6" required="" placeholder="Nội dung"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="contact-form-btn">
                                    <button type="submit" class="default-btn submit-btn"
                                    @mouseenter="updatePosition" @mouseleave="updatePosition" ref="buttonRef">Gửi 
                                        <span ref="spanRef" class="absolute pointer-events-none transition-all duration-300"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="form-message" style="margin-top: 10px;"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="map-section">
    <div class="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391.4691800965354!2d105.79847308637694!3d21.020539898503614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab004e5d9375%3A0x553fc8dce47759e1!2sVPMEDIA!5e0!3m2!1svi!2s!4v1741945668071!5m2!1svi!2s"></iframe>
    </div>
</div>
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