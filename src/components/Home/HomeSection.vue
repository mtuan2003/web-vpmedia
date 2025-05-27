<script setup>
const particlesOptions = {
  fullScreen: {
    enable: false
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      outModes: {
        default: "out"
      }
    },
    number: {
      value: 400,
      density: {
        enable: true,
        width: 1920,
        height: 1080
      },
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 5,
        sync: false,
        startValue: "random",
        mode: "auto"
      }
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 3 },
      animation: {
        enable: true,
        sync: false,
        startValue: "random",
        mode: "auto"
      }
    }
  },
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble"
      },
      onclick: {
        enable: false,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 300,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 300,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
        mix: false
      },
      repulse: {
        distance: 400
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

import { ref } from 'vue'

const buttonRef = ref(null)
const spanRef = ref(null)

const buttonRef2 = ref(null)
const spanRef2 = ref(null)

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
const updatePosition2 = (e) => {
  const button2 = buttonRef2.value
  const span2 = spanRef2.value

  if (button2 && span2) {
    const rect = button2.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top
    span2.style.left = `${relX}px`
    span2.style.top = `${relY}px`
  }
}
</script>

<template>
  <div class="relative z-1 max-lg:h-100% h-850px min-h-100vh bg-[linear-gradient(to_bottom,#021B79,#0575E6)] overflow-hidden max-lg:pt-37.5 max-lg:pb-25">
      <vue-particles id="tsparticles" class="w-full h-full absolute !pointer-events-none top-0 left-0"
        :options="particlesOptions"/>
      <div class="d-table">
          <div class="d-table-cell">
              <div class="container !px-0">
                  <div class="row !items-center flex flex-wrap">
                      <div class="col-50lg">
                          <div class="pt-12.5 relative z-10">
                              <h1 class="text-12.5 max-md:text-10 text-[#ffffff] md:[margin:0_0_20px_0] max-md:[margin:0_0_15px_0] font-700 uppercase lh-70px max-md:lh-56px max-lg:text-center">Giải pháp CNTT thông minh cho doanh nghiệp của bạn</h1>
                              <p class="text-[#ffffff] text-4 m-0 max-lg:text-center">
                                  Chúng tôi chuyên về nghiên cứu, xây dựng và phát triển các sản phẩm về công nghệ
                                  thông tin, viễn thông trên mạng Internet và mạng di động. Sứ mệnh của chúng tôi là
                                  mang đến những giải pháp tối ưu phù hợp với yêu cầu của từng khách hàng trên thị
                                  trường Công nghệ thông tin và Viễn thông.
                              </p>
                              <div class="font-[quicksand] max-md:mt-30px md:mt-25px sm:flex max-sm:block max-sm:text-center max-lg:justify-center !items-center text-left">
                                  <a href="#services-section" class="default-btn-one md:mr-5 max-md:mr-10px  no-underline"
                                  @mouseenter="updatePosition"
                                  @mouseleave="updatePosition" ref="buttonRef">Dịch vụ
                                  <span ref="spanRef"
                                  class="absolute pointer-events-none transition-all duration-300 !bg-[#142b73]"></span></a>
                                    <RouterLink to="/lien-he" class="mb--6px">
                                    <a class="default-btn-one md:mr-5 max-md:mr-10px no-underline"
                                    @mouseenter="updatePosition2"
                                    @mouseleave="updatePosition2" ref="buttonRef2">Liên hệ với chúng tôi
                                    <span ref="spanRef2"
                                    class="absolute pointer-events-none transition-all duration-300 !bg-[#142b73]"></span></a>
                                    </RouterLink>
                              </div>
                          </div>
                      </div>
                      <div class="col-50lg">
                          <div class="text-center pt-12.5 relative z-10">
                              <img src="/src/assets/img/home.png" alt="image">
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="absolute bottom--5px left-0 w-[100%] h-auto z-1">
          <img src="/src/assets/home-wave-bg.svg" alt="svg shape">
      </div>
  </div>
</template>
<style scoped>

</style>