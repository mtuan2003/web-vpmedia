<script setup>
const particlesOptions = {
  fullScreen: {
    enable: false
  },
  particles: {
    number: {
      value: 110,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: "#ddd"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#888888"
      },
      polygon: {
        nb_sides: 5
      },
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3,
      random: false,
      anim: {
        enable: true,
        speed: 5,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#555",
      opacity: 0.05,
      width: 1
    },
    move: {
      enable: true,
      speed: 10,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
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
  
  const button2 = buttonRef2.value
  const span2 = spanRef2.value

  if (button && span) {
    const rect = button.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top
    span.style.left = `${relX}px`
    span.style.top = `${relY}px`
  }
  if (button2 && span2) {
    const rect = button2.getBoundingClientRect()
    const relX = e.clientX - rect.left
    const relY = e.clientY - rect.top
    span2.style.left = `${relX}px`
    span2.style.top = `${relY}px`
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
  <div class="home-section">
      <vue-particles id="tsparticles" class="w-full h-full absolute !pointer-events-none top-0 left-0"
        :options="particlesOptions"
      />
    <div class="d-table">
        <div class="d-table-cell">
            <div class="container">
                <div class="row items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="main-banner-content relative z-10">
                            <h1 class="lh-70px">Giải pháp CNTT thông minh cho doanh nghiệp của bạn</h1>
                            <p>
                                Chúng tôi chuyên về nghiên cứu, xây dựng và phát triển các sản phẩm về công nghệ
                                thông tin, viễn thông trên mạng Internet và mạng di động. Sứ mệnh của chúng tôi là
                                mang đến những giải pháp tối ưu phù hợp với yêu cầu của từng khách hàng trên thị
                                trường Công nghệ thông tin và Viễn thông.
                            </p>
                            <div class="banner-btn">
                                <a href="#services-section" class="default-btn-one no-underline"
                                @mouseenter="updatePosition"
                                @mouseleave="updatePosition" ref="buttonRef">Dịch vụ
                                <span ref="spanRef"
                                class="absolute pointer-events-none transition-all duration-300"></span></a>
                                
                                <a href="/lien-he" class="default-btn-one no-underline"
                                @mouseenter="updatePosition2"
                                @mouseleave="updatePosition2" ref="buttonRef2">Liên hệ với chúng tôi
                                <span ref="spanRef2"
                                class="absolute pointer-events-none transition-all duration-300"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="text-center pt-12.5 relative z-10">
                            <img src="/src/assets/img/home.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="creative-shape relative z-1">
        <img src="/src/assets/home-wave-bg.svg" alt="svg shape">
    </div>
  </div>
</template>
<style scoped>

</style>