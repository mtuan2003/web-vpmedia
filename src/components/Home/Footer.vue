<template>
    <section class="footer-subscribe-wrapper">
        <div class="footer-section pt-25 pb-25">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <a class="footer-logo" href="#">
                                <img src="/src/assets/img/logo.png" class="white-logo" alt="logo">
                            </a>
                            <p>VPMEDIA là đơn vị hàng đầu trong lĩnh vực cung cấp giải pháp công nghệ, viễn thông và phần mềm. Chúng tôi cam kết mang đến những dịch vụ chất lượng, đáp ứng nhu cầu đa dạng của doanh nghiệp, từ vận hành hệ thống, tổng đài VoIP, tin nhắn thương hiệu đến phát triển ứng dụng và giải pháp giá trị gia tăng.</p>

                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget font-[quicksand]">
                            <div class="footer-heading">
                                <h3>Dịch vụ</h3>
                            </div>
                            <ul class="footer-quick-links">
                                <li> <a class="no-underline hover:underline" href="/giai-phap/tong-dai-voip">Giải pháp tổng đài VoIP</a></li>
                                <li> <a class="no-underline hover:underline" href="/dich-vu/cuoc-goi-thuong-hieu">Cuộc gọi thương hiệu</a></li>
                                <li> <a class="no-underline hover:underline" href="/dich-vu/dich-vu-gia-tri-gia-tang">Dịch vụ GTGT</a></li>
                                <li> <a class="no-underline hover:underline" href="/dich-vu/phat-trien-ung-dung-va-games">Phát triển ứng dụng và games</a></li>
                                <li> <a class="no-underline hover:underline" href="/dich-vu/van-hanh-he-thong">Vận hành hệ thống</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 font-[quicksand]">
                        <div class="single-footer-widget">
                            <div class="footer-heading">
                                <h3>Liên hệ</h3>
                            </div>
                            <div class="footer-info-contact">
                                <i class="flaticon-phone-call"></i>
                                <h3>Phone</h3>
                                <span><a class="no-underline" href="tel:+84(0) 902 825 586">+84(0) 902 825 586</a></span>
                            </div>
                            <div class="footer-info-contact">
                                <i class="flaticon-envelope"></i>
                                <h3>Email</h3>
                                <span><a class="no-underline" href="mailto:support@vpmedia.vn">support@vpmedia.vn</a></span>
                            </div>
                            <div class="footer-info-contact">
                                <i class="flaticon-placeholder"></i>
                                <h3>Địa chỉ</h3>
                                <span>Số 3 ngách 4 ngõ 163 Nguyễn Khang, phường Yên Hoà, Cầu Giấy, Hà Nội</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
  <div class="go-top" @click="scrollToTop">
        <i class="flaticon-chevron-up"></i>
        <i class="flaticon-chevron-up"></i>
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 600
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>