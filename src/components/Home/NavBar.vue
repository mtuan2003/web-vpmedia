<template>
    <div class="navbar-section max-lg:shadow-[rgba(0,0,0,0.11)_0px_5px_40px_0px]">
        <div class="techvia-responsive-nav">
            <div class="container">
                <div class="techvia-responsive-menu">
                    <div class="logo flex">
                        <a href="/">
                            <img src="/src/assets/logo.png" class="white-logo" alt="logo">
                            <img src="/src/assets/logo-black.png" class="black-logo" alt="logo">
                        </a>
                    </div>
                    <!-- Button toggle menu -->
                    <transition name="slide-left" mode="out-in">
                        <div class="lg:hidden absolute top-0 right-0 z-50 flex items-center justify-center cursor-pointer"
                        :key="isOpen" @click="isOpen = !isOpen" aria-label="Toggle menu">
                            <div class="logo flex">
                                <template v-if="isOpen">
                                    <span class="text-2xl text-black absolute top-2 right-1 black-logo font-[quicksand]">X</span>
                                    <span class="text-2xl text-white absolute top-2 right-1 white-logo font-[quicksand]">X</span>
                                </template>
                                <template v-else>
                                    <div class="space-y-1 white-logo absolute top-4 right-0">
                                        <span class="block w-6 h-0.75 rounded-3px bg-white"></span>
                                        <span class="block w-6 h-0.75 rounded-3px bg-white"></span>
                                        <span class="block w-6 h-0.75 rounded-3px bg-white"></span>
                                    </div>
                                    <div class="space-y-1 black-logo absolute top-4 right-0">
                                        <span class="block w-6 h-0.75 rounded-3px bg-black"></span>
                                        <span class="block w-6 h-0.75 rounded-3px bg-black"></span>
                                        <span class="block w-6 h-0.75 rounded-3px bg-black"></span>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </transition>
                    <!-- Menu responsive -->
                    <transition name="slide-menu" mode="in-out">
                        <nav class="bg-white w-[100%] my-3 font-[quicksand] absolute" :class="{ 'block': isOpen, 'hidden': !isOpen }" v-if="isOpen">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a href="/" class="nav-link my-2 ml-8">Trang chủ</a>
                                    </li>
                                    <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                        <a href="/ve-chung-toi" class="nav-link my-2 ml-8">Về chúng tôi</a>
                                    </li>
                                    <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                        <a class="flex items-center border-t-1px my-2 ml-8 cursor-pointer justify-between border-t-[#dbeefd] no-underline text-[#212529]" @click="isSubmenuOpen = !isSubmenuOpen">Dịch vụ 
                                            <span class="font-700 mr-4">{{ isSubmenuOpen ? '–' : '+' }}</span></a>
                                        <!-- Submenu -->
                                        <transition name="slide">
                                            <ul v-show="isSubmenuOpen" class="p-0 m-0">
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <a href="/dich-vu/tin-nhan-sms" class="nav-link my-2 ml-16">Tin nhắn SMS</a>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <a href="/dich-vu/cuoc-goi-thuong-hieu" class="nav-link my-2 ml-16">Cuộc gọi thương hiệu</a>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <a href="/dich-vu/dich-vu-gia-tri-gia-tang" class="nav-link my-2 ml-16">Dịch vụ GTGT</a>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <a href="/dich-vu/phat-trien-ung-dung-va-games" class="nav-link my-2 ml-16">Phát triển ứng dụng và games</a>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <a href="/dich-vu/van-hanh-he-thong" class="nav-link my-2 ml-16">Vận hành hệ thống</a>
                                                </li>
                                            </ul>
                                        </transition>
                                    </li>
                                    <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                        <a class="flex items-center border-t-1px my-2 ml-8 cursor-pointer justify-between border-t-[#dbeefd] no-underline text-[#212529]" @click="isSubmenuOpen2 = !isSubmenuOpen2"><span>Giải pháp</span>
                                            <span class="font-700 mr-4">{{ isSubmenuOpen2 ? '–' : '+' }}</span>
                                        </a>
                                        <transition name="slide">
                                            <ul v-show="isSubmenuOpen2" class="p-0 m-0">
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <a href="/giai-phap/tong-dai-voip" class="nav-link my-2 ml-16">Tổng đài VoIP</a>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <a href="/giai-phap/tong-dai-tin-nhan" class="nav-link my-2 ml-16">Tổng đài tin nhắn</a>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <a href="/giai-phap/thu-dien-tu" class="nav-link my-2 ml-16">Thư điện tử</a>
                                                </li>
                                            </ul>
                                        </transition>
                                    </li>
                                    <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                            <a href="/lien-he" class="nav-link my-2 ml-8">Tuyển dụng</a>
                                        </li>
                                    <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                        <a href="/lien-he" class="nav-link my-2 ml-8">Liên hệ</a>
                                    </li>
                                </ul>
                        </nav>
                    </transition>
                        
                </div>
            </div>
        </div>
        <div class="techvia-nav font-[quicksand]">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="/">
                        <img src="/src/assets/logo.png" class="white-logo" alt="logo">
                        <img src="/src/assets/logo-black.png" class="black-logo" alt="logo">
                    </a>
                    <div class="md:!flex md:basis-auto basis-100% grow-1 items-center" style="display: block;">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="/" class="nav-link">Trang chủ</a>
                            </li>
                            <li class="nav-item">
                                <a href="/ve-chung-toi" class="nav-link">Về chúng tôi</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Dịch vụ <font-awesome-icon icon="fas fa-chevron-down" class="h-2.5 w-2.1875 mb-0.75 justify-center"/></a>
                                <ul class="dropdown-menu">

                                    <li class="nav-item">
                                        <a href="/dich-vu/tin-nhan-sms" class="nav-link">Tin nhắn SMS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/dich-vu/cuoc-goi-thuong-hieu" class="nav-link">Cuộc gọi thương hiệu</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/dich-vu/dich-vu-gia-tri-gia-tang" class="nav-link">Dịch vụ GTGT</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/dich-vu/phat-trien-ung-dung-va-games" class="nav-link">Phát triển ứng dụng và games</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/dich-vu/van-hanh-he-thong" class="nav-link">Vận hành hệ thống</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Giải pháp <font-awesome-icon icon="fas fa-chevron-down" class="h-2.5 w-2.1875 mb-0.75 justify-center"/></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="/giai-phap/tong-dai-voip" class="nav-link">Tổng đài VoIP</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="/giai-phap/tong-dai-tin-nhan" class="nav-link">Tổng đài tin nhắn</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/giai-phap/thu-dien-tu" class="nav-link">Thư điện tử</a>
                                    </li>

                                </ul>
                            </li>
                            <li class="nav-item">
                                    <a href="/lien-he" class="nav-link">Tuyển dụng</a>
                                </li>
                            <li class="nav-item">
                                <a href="/lien-he" class="nav-link">Liên hệ</a>
                            </li>
                        </ul>
                        <div class="other-option">
                            <a class="default-btn no-underline" href="mailto:demo@example.com" @mouseenter="updatePosition" @mouseleave="updatePosition" ref="buttonRef">
                                Hotline : +84(0) 902 825 586
                                <span ref="spanRef" class="absolute pointer-events-none transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, onUnmounted, ref } from 'vue'
// hover effect for button
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
// menu responsive
const isOpen = ref(false)
const isSubmenuOpen = ref(false)
const isSubmenuOpen2 = ref(false)
// sticky nav
const handleScroll = () => {
  const navbar = document.querySelector('.navbar-section');
  if (window.scrollY > 120) {
    navbar?.classList.add('is-sticky');
  } else {
    navbar?.classList.remove('is-sticky');
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Slide-in from left */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.slide-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-left-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
/* Slide submenu animation */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.6s ease, opacity 0.6s ease;
  overflow: hidden;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* Slide whole menu from top */
.slide-menu-enter-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-menu-enter-from {
  transform: translateY(-20%);
  opacity: 0;
}
.slide-menu-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-menu-leave-active {
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.slide-menu-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}

/* sticky */
.is-sticky {
    position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		-webkit-box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
		box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.06);
		background: #ffffff !important;
		-webkit-animation: 500ms ease-in-out 0s normal fadeInDown;
		animation: 500ms ease-in-out 0s normal fadeInDown;
		-webkit-transition: 0.4s;
		transition: 0.4s;
}
@-webkit-keyframes fadeInDown {
    0% {
        -webkit-transform: translate3d(0,-100%,0);
        opacity: 0;
        transform: translate3d(0,-100%,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

@keyframes fadeInDown {
    0% {
        -webkit-transform: translate3d(0,-100%,0);
        opacity: 0;
        transform: translate3d(0,-100%,0)
    }

    to {
        -webkit-transform: translateZ(0);
        opacity: 1;
        transform: translateZ(0)
    }
}

.fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown
}

</style>