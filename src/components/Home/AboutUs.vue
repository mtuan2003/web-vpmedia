<template>
  <section class="relative z-1 px-0 py-100px">
    <div class="container max-lg:row lg:!flex !items-center">
      <div class="lg:col-50 max-lg:col-100 mx-4">
          <h6
            class="pl-0 text-[#142b73] text-16px font-700 mb-10px uppercase tracking-0.5px max-md:mt-10"
          >
            Về chúng tôi
          </h6>
          <h2 class="pl-0 text-38px font-700 mb-20px max-md:text-33px">
            VPMEDIA
          </h2>
          <p>
            VPMEDIA là công ty hoạt động trong lĩnh vực viễn thông và CNTT được
            thành lập để trở thành doanh nghiệp hàng đầu trong lĩnh vực cung cấp
            dịch vụ gia tăng viễn thông trên Internet và di động tại Việt Nam.
            Khách hàng biết đến chúng tôi là nhà cung cấp các giải pháp phần mềm
            sáng tạo và đáng tin cậy cho thị trường Viễn thông trong nước cũng
            như vươn ra ngoài thế giới.
          </p>
          <div class="mt-8.75">
            <RouterLink to="/ve-chung-toi">
              <a
              class="default-btn no-underline font-[quicksand]"
              @mouseenter="updatePosition"
              @mouseleave="updatePosition"
              ref="buttonRef"
              >Xem thêm
              <span
                ref="spanRef"
                class="absolute pointer-events-none transition-all duration-300"
              ></span>
            </a>
            </RouterLink>

        </div>
      </div>
      <div class="lg:col-50 max-lg:col-100 mx-4">
        <div class="relative text-center ml-0 max-lg:mt-8.75 w-100%">
          <img src="/src/assets/img/about.jpg" alt="About image" class="rounded-5px" />
          <div class="absolute left-0 right-0 bottom-20px px-5px py-5px rounded-[10px] max-w-370px flex justify-start items-center bg-[#ffffff] shadow-[0_0_15px_rgba(0,0,0,0.05)] ml-auto mr-auto max-xs:!hidden">
            <img src="/src/assets/img/about-sub.jpg" class="max-w-135px rounded-[10px] mr-5" alt="About Images" />
            <div class="text-left">
              <h3 class="text-[#ec5a26] text-45px font-700 mb-0">12</h3>
              <span class="font-[quicksand] text-[#404040] text-18px font-600">Năm xây dựng và đổi mới</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";

const buttonRef = ref(null);
const spanRef = ref(null);

const updatePosition = (e) => {
  const button = buttonRef.value;
  const span = spanRef.value;

  if (button && span) {
    const rect = button.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    span.style.left = `${relX}px`;
    span.style.top = `${relY}px`;
  }
};
</script>