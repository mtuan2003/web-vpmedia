<template>
    <div class="navbar-section max-lg:py-5 max-lg:shadow-[rgba(0,0,0,0.11)_0px_5px_40px_0px]">
        <!-- mobile -->
        <div class="max-lg:block lg:hidden">
            <div class="container">
                <div class="max-lg:relative">
                    <div class="logo flex">
                        <RouterLink to="/">
                            <img src="/src/assets/img/logo.png" class="white-logo" alt="logo">
                            <img src="/src/assets/img/logo-black.png" class="black-logo" alt="logo">
                        </RouterLink>
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
                                <ul class="max-lg:[overflow-y:scroll] max-lg:h-75 max-lg:[box-shadow:0_7px_13px_0_rgba(0_,0_,0_,0.1)]">
                                    <li class="nav-item">
                                        <RouterLink to="/" class="nav-link mt-4 mb-2.5 ml-8">Trang chủ</RouterLink>
                                    </li>
                                    <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                        <RouterLink to="/ve-chung-toi" class="nav-link mt-4 mb-2.5 ml-8">Về chúng tôi</RouterLink>
                                    </li>
                                    <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                        <a class="text-[#677294] flex items-center border-t-1px mt-4 mb-2.5 ml-8 cursor-pointer justify-between border-t-[#dbeefd] no-underline text-[#212529]" @click="isSubmenuOpen = !isSubmenuOpen">Dịch vụ 
                                            <span class="font-700 mr-4">{{ isSubmenuOpen ? '–' : '+' }}</span></a>
                                        <!-- Submenu -->
                                        <transition name="slide">
                                            <ul v-show="isSubmenuOpen" class="p-0 m-0">
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <RouterLink to="/dich-vu/tin-nhan-sms" class="nav-link mt-4 mb-2.5 ml-16">Tin nhắn SMS</RouterLink>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <RouterLink to="/dich-vu/cuoc-goi-thuong-hieu" class="nav-link mt-4 mb-2.5 ml-16">Cuộc gọi thương hiệu</RouterLink>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <RouterLink to="/dich-vu/dich-vu-gia-tri-gia-tang" class="nav-link mt-4 mb-2.5 ml-16">Dịch vụ GTGT</RouterLink>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <RouterLink to="/dich-vu/phat-trien-ung-dung-va-games" class="nav-link mt-4 mb-2.5 ml-16">Phát triển ứng dụng và games</RouterLink>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <RouterLink to="/dich-vu/van-hanh-he-thong" class="nav-link mt-4 mb-2.5 ml-16">Vận hành hệ thống</RouterLink>
                                                </li>
                                            </ul>
                                        </transition>
                                    </li>
                                    <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                        <a class="text-[#677294] flex items-center border-t-1px mt-4 mb-2.5 ml-8 cursor-pointer justify-between border-t-[#dbeefd] no-underline text-[#212529]" @click="isSubmenuOpen2 = !isSubmenuOpen2"><span>Giải pháp</span>
                                            <span class="font-700 mr-4">{{ isSubmenuOpen2 ? '–' : '+' }}</span>
                                        </a>
                                        <transition name="slide">
                                            <ul v-show="isSubmenuOpen2" class="p-0 m-0">
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <RouterLink to="/giai-phap/tong-dai-voip" class="nav-link mt-4 mb-2.5 ml-16">Tổng đài VoIP</RouterLink>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <RouterLink to="/giai-phap/tong-dai-tin-nhan" class="nav-link mt-4 mb-2.5 ml-16">Tổng đài tin nhắn</RouterLink>
                                                </li>
                                                <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                                    <RouterLink to="/giai-phap/thu-dien-tu" class="nav-link mt-4 mb-2.5 ml-16">Thư điện tử</RouterLink>
                                                </li>
                                            </ul>
                                        </transition>
                                    </li>
                                    <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                            <RouterLink to="/lien-he" class="nav-link mt-4 mb-2.5 ml-8">Tuyển dụng</RouterLink>
                                        </li>
                                    <li class="nav-item border-t-1px border-t-solid border-t-[#dbeefd]">
                                        <RouterLink to="/lien-he" class="nav-link mt-4 mb-2.5 ml-8">Liên hệ</RouterLink>
                                    </li>
                                </ul>
                        </nav>
                    </transition>
                        
                </div>
            </div>
        </div>
        <!-- desktop -->
        <div class="techvia-nav max-lg:!hidden font-[quicksand]">
            <div class="container">
                <nav class="navbar !p-0 md:![flex-wrap:nowrap] md:!justify-start">
                    <RouterLink class="whitespace-nowrap [text-decoration:none] my-1.25 mr-4" to="/">
                        <img src="/src/assets/img/logo.png" class="white-logo" alt="logo">
                        <img src="/src/assets/img/logo-black.png" class="black-logo" alt="logo">
                    </RouterLink>
                    <!-- style="display: block;" -->
                    <div class="md:!flex md:basis-auto basis-100% grow-1 items-center">
                        <ul class="navbar-nav m-auto md:![flex-direction:row]">
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link !ml-0">Trang chủ</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/ve-chung-toi" class="nav-link">Về chúng tôi</RouterLink>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Dịch vụ <font-awesome-icon icon="fas fa-chevron-down" class="h-2.5 w-2.1875 mb-0.75 justify-center"/></a>
                                <ul class="dropdown-menu">

                                    <li class="nav-item">
                                        <RouterLink to="/dich-vu/tin-nhan-sms" class="nav-link">Tin nhắn SMS</RouterLink>
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="/dich-vu/cuoc-goi-thuong-hieu" class="nav-link">Cuộc gọi thương hiệu</RouterLink>
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="/dich-vu/dich-vu-gia-tri-gia-tang" class="nav-link">Dịch vụ GTGT</RouterLink>
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="/dich-vu/phat-trien-ung-dung-va-games" class="nav-link">Phát triển ứng dụng và games</RouterLink>
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="/dich-vu/van-hanh-he-thong" class="nav-link">Vận hành hệ thống</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">Giải pháp <font-awesome-icon icon="fas fa-chevron-down" class="h-2.5 w-2.1875 mb-0.75 justify-center"/></a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <RouterLink to="/giai-phap/tong-dai-voip" class="nav-link">Tổng đài VoIP</RouterLink>
                                    </li>

                                    <li class="nav-item">
                                        <RouterLink to="/giai-phap/tong-dai-tin-nhan" class="nav-link">Tổng đài tin nhắn</RouterLink>
                                    </li>
                                    <li class="nav-item">
                                        <RouterLink to="/giai-phap/thu-dien-tu" class="nav-link">Thư điện tử</RouterLink>
                                    </li>

                                </ul>
                            </li>
                            <li class="nav-item">
                                    <RouterLink to="/lien-he" class="nav-link">Tuyển dụng</RouterLink>
                                </li>
                            <li class="nav-item">
                                <RouterLink to="/lien-he" class="nav-link !mr-0">Liên hệ</RouterLink>
                            </li>
                        </ul>
                        <div class="other-option ml-0 mt-1.25">
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
.navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

.navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 8px;
}

.nav-link {
    display: block;
    padding: var(0.5rem) var(1.5rem);
    color: #677294;
    text-decoration: none;
    background: 0 0;
    border: 0;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out
}

.nav-link:focus-visible {
    outline: 0;
    box-shadow: 0 0 0 .25rem rgba(13,110,253,.25)
}

/* max-width 991px */
@media only screen and (max-width: 991px) {
.navbar-section.is-sticky {
    border-bottom: none;
    box-shadow: 0 7px 13px 0 rgba(0, 0, 0, 0.1);
    padding-top: 20px;
    padding-bottom: 20px;
}

    .navbar-section.is-sticky .logo .white-logo {
        display: none;
    }

    .navbar-section.is-sticky .logo .black-logo {
        display: block;
    }

.logo {
    position: relative;
    width: 50%;
    z-index: 999;
}

    .logo .white-logo {
        display: block;
    }

    .logo .black-logo {
        display: none;
    }
}
</style>