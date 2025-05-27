<template>
    <section class="relative z-1 bg-[#202438]">
        <div class="pt-25 pb-25">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-50maxlgsm">
                        <div class="max-md:mb-35px max-lg:px-0 max-lg:py-15px">
                            <a class="inline-block mb-6.25" href="#">
                                <img src="/src/assets/img/logo.png" class="white-logo" alt="logo">
                            </a>
                            <p class="text-4 text-[#ececec] font-400">VPMEDIA là đơn vị hàng đầu trong lĩnh vực cung cấp giải pháp công nghệ, viễn thông và phần mềm. Chúng tôi cam kết mang đến những dịch vụ chất lượng, đáp ứng nhu cầu đa dạng của doanh nghiệp, từ vận hành hệ thống, tổng đài VoIP, tin nhắn thương hiệu đến phát triển ứng dụng và giải pháp giá trị gia tăng.</p>

                        </div>
                    </div>
                    <div class="col-lg-4 col-50maxlgsm">
                        <div class="max-md:mb-35px max-lg:px-0 max-lg:py-15px font-[quicksand]">
                            <div class="mb-6.25 max-md:mb-5">
                                <h3 class="text-20px text-[#ffffff] font-600 mt-0 mb-0 ml-0 mr-0 relative border-b-1px border-b-solid border-b-[#777] pb-10px">Dịch vụ</h3>
                            </div>
                            <ul class="pl-0 mb-0">
                                <li class="max-lg:last-pb-25px list-none pb-18px last-pb-0"> <RouterLink class="inline-block text-[#ececec] font-400 text-4 no-underline hover:underline hover:text-[#142b73] transition-duration-0.4s" to="/giai-phap/tong-dai-voip">Giải pháp tổng đài VoIP</RouterLink></li>
                                <li class="max-lg:last-pb-25px list-none pb-18px last-pb-0"> <RouterLink class="inline-block text-[#ececec] font-400 text-4 no-underline hover:underline hover:text-[#142b73] transition-duration-0.4s" to="/dich-vu/cuoc-goi-thuong-hieu">Cuộc gọi thương hiệu</RouterLink></li>
                                <li class="max-lg:last-pb-25px list-none pb-18px last-pb-0"> <RouterLink class="inline-block text-[#ececec] font-400 text-4 no-underline hover:underline hover:text-[#142b73] transition-duration-0.4s" to="/dich-vu/dich-vu-gia-tri-gia-tang">Dịch vụ GTGT</RouterLink></li>
                                <li class="max-lg:last-pb-25px list-none pb-18px last-pb-0"> <RouterLink class="inline-block text-[#ececec] font-400 text-4 no-underline hover:underline hover:text-[#142b73] transition-duration-0.4s" to="/dich-vu/phat-trien-ung-dung-va-games">Phát triển ứng dụng và games</RouterLink></li>
                                <li class="max-lg:last-pb-25px list-none pb-18px last-pb-0"> <RouterLink class="inline-block text-[#ececec] font-400 text-4 no-underline hover:underline hover:text-[#142b73] transition-duration-0.4s" to="/dich-vu/van-hanh-he-thong">Vận hành hệ thống</RouterLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-50maxlgsm font-[quicksand]">
                        <div class="max-md:mb-35px max-lg:px-0 max-lg:py-15px max-md:pt-4">
                            <div class="mb-6.25 max-md:mb-5">
                                <h3 class="text-20px text-[#ffffff] font-600 mt-0 mb-0 ml-0 mr-0 relative border-b-1px border-b-solid border-b-[#777] pb-10px">Liên hệ</h3>
                            </div>
                            <div class="relative pl-35px mb-4">
                                <i class="content-[''] absolute left-0 top-0px invert-100 h-5 w-5 bg-[url(/src/assets/img/footer/phone-call.png)] bg-[length:cover]"></i>
                                <h3 class="text-16px text-[#fff] font-600 mt-0 mb-10px ml-0 mr-0">Phone</h3>
                                <span class="text-16px text-[#ececec] font-400"><a class="no-underline text-16px text-[#ececec] font-400 transition-duration-0.4s hover:text-[#142b73]" href="tel:+84(0) 902 825 586">+84(0) 902 825 586</a></span>
                            </div>
                            <div class="relative pl-35px mb-4">
                                <i class="content-[''] absolute left-0 top-0px invert-100 h-5 w-5 bg-[url(/src/assets/img/footer/envelope.png)] bg-[length:cover]"></i>
                                <h3 class="text-16px text-[#fff] font-600 mt-0 mb-10px ml-0 mr-0">Email</h3>
                                <span class="text-16px text-[#ececec] font-400"><a class="no-underline text-16px text-[#ececec] font-400 transition-duration-0.4s hover:text-[#142b73]" href="mailto:support@vpmedia.vn">support@vpmedia.vn</a></span>
                            </div>
                            <div class="relative pl-35px mb-4">
                                <i class="content-[''] absolute left-0 top-0px invert-100 h-5 w-5 bg-[url(/src/assets/img/footer/location-pin.png)] bg-[length:cover]"></i>
                                <h3 class="text-16px text-[#fff] font-600 mt-0 mb-10px ml-0 mr-0">Địa chỉ</h3>
                                <span class="text-16px text-[#ececec] font-400">Số 3 ngách 4 ngõ 163 Nguyễn Khang, phường Yên Hoà, Cầu Giấy, Hà Nội</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
  <div class="go-top" :class="{active: isVisible}" @click="scrollToTop">
        <i class="content-[''] inline-block invert-100 h-4 w-3.5 bg-[url(/src/assets/img/icon/up-arrows.png)] bg-[length:cover]"></i>
        <i class="content-[''] inline-block invert-100 h-4 w-3.5 bg-[url(/src/assets/img/icon/up-arrows.png)] bg-[length:cover]"></i>
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
<style scoped>
.go-top {
	position: fixed;
	cursor: pointer;
	top: 0;
	right: 30px;
	color: #ffffff;
	background-color: #142b73;
	z-index: 4;
	width: 45px;
	text-align: center;
	height: 45px;
	line-height: 45px;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: .9s;
	transition: .9s;
	border-radius: 3px;
}

	.go-top.active {
		top: 95%;
		-webkit-transform: translateY(-98%);
		transform: translateY(-98%);
		opacity: 1;
		visibility: visible;
	}

	.go-top i {
		position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
		left: 0;
		right: 0;
		margin: 0 auto;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

		.go-top i:last-child {
			opacity: 0;
			visibility: hidden;
			top: 60%;
		}

	.go-top::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		background: #0b0b31;
		opacity: 0;
		visibility: hidden;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 3px;
	}

	.go-top:hover, .go-top:focus {
		color: #ffffff;
	}

		.go-top:hover::before, .go-top:focus::before {
			opacity: 1;
			visibility: visible;
		}

		.go-top:hover i:first-child, .go-top:focus i:first-child {
			opacity: 0;
			top: 0;
			visibility: hidden;
		}

		.go-top:hover i:last-child, .go-top:focus i:last-child {
			opacity: 1;
			visibility: visible;
			top: 50%;
		}
</style>