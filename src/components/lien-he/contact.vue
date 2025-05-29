<template>
<div class="px-0 py-100px">
    <div class="container">
        <div class="row">
            <div class="">
                <div class="text-20px text-center mb-65px lh-normal">
                    <h6 class="text-16px font-700 text-[#ec5a26] tracking-0.5px uppercase">Liên hệ với chúng tôi</h6>
                </div>
            </div>
            <div class="col-33lg col-50md">
                <div class="bg-[#fff] mt-30px px-20px py-45px text-center rounded-[5px] border-t-3px border-t-solid border-t-[#142b73] shadow-[0_3px_15px_rgba(0,0,0,0.05),0_5px_15px_rgba(0,0,0,0.03)]">
                    <h5 class="text-5 font-700 mb-2.5">Hà Nội</h5>
                    <p class="text-4 mb-3">Số 3 ngách 4 ngõ 163 Nguyễn Khang, phường Yên Hoà, Cầu Giấy, Hà Nội</p>
                    <a href="tel:+84902825586" class="text-4 font-600 tracking-1.5px block lh-normal no-underline color-[#0b0b31] font-[quicksand]">+84(0) 902 825 586</a>
                    <a href="mailto:support@vpmedia.vn" class="text-4 font-600 tracking-1.5px block lh-normal no-underline color-[#0b0b31] font-[quicksand]">support@vpmedia.vn</a>
                </div>
            </div>
            <div class="col-50lg lg:!ml-8.33333333%">
                    <form class="mt-4">
                        <div class="row mb-2.5">
                            <div class="col-50md">
                                <div class="mb-30px">
                                    <input type="text" name="name" id="name" class="form-control border-[#86b7fe] outline-0 [box-shadow:0_0_0_4px_rgba(13,_110_253_.25)]" required="" placeholder="Họ và tên">
                                </div>
                            </div>
                            <div class="col-50md">
                                <div class="mb-30px">
                                    <input type="email" name="email" id="email" class="form-control border-[#86b7fe] outline-0 [box-shadow:0_0_0_4px_rgba(13,_110_253_.25)]" required="" placeholder="Địa chỉ email">
                                </div>
                            </div>
                            <div class="col-50md">
                                <div class="mb-30px">
                                    <input type="text" name="phone" id="phone" required="" class="form-control border-[#86b7fe] outline-0 [box-shadow:0_0_0_4px_rgba(13,_110_253_.25)]" placeholder="Số điện thoại">
                                </div>
                            </div>
                            <div class="col-50md">
                                <div class="mb-30px">
                                    <input type="text" name="subject" id="subject" class="form-control border-[#86b7fe] outline-0 [box-shadow:0_0_0_4px_rgba(13,_110_253_.25)]" required="" placeholder="Tiêu đề">
                                </div>
                            </div>
                                <div class="mb-30px">
                                    <textarea name="message" class="form-control border-[#86b7fe] outline-0 [box-shadow:0_0_0_4px_rgba(13,_110_253_.25)] resize-y h-auto pt-15px lh-initial" id="message" cols="30" rows="6" required="" placeholder="Nội dung"></textarea>
                                </div>
                                <div class="text-left mt-1.25">
                                    <button type="submit" class="[border:none] relative inline-block text-center overflow-hidden z-1 text-[#ffffff] bg-[#142b73] [transition:0.4s] rounded-3px font-600 text-4 px-35px py-14px [box-shadow:0_7px_25px_rgb(123,_104,_238,_0.25)] group cursor-pointer"
                                    @mouseenter="updatePosition" @mouseleave="updatePosition" ref="buttonRef">Gửi 
                                        <span ref="spanRef" class="absolute block w-0 h-0 rounded-50% bg-[#056bd9] ![transition:width_0.5s_ease-in-out,_height_0.5s_ease-in-out] ![transform:translate(-50%,_-50%)] z--1 rounded-30px group-hover:w-225% group-hover:h-562.5px group-focus:w-225% group-focus:h-562.5px pointer-events-none transition-all duration-300"></span>
                                    </button>
                                </div>
                        </div>
                    </form>
            </div>
        </div>
    </div>
</div>
<div class="mb-[-0.625rem]">
    <div class="w-100% h-450px [border:0]">
        <iframe class="w-100% h-450px [border:0]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391.4691800965354!2d105.79847308637694!3d21.020539898503614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab004e5d9375%3A0x553fc8dce47759e1!2sVPMEDIA!5e0!3m2!1svi!2s!4v1741945668071!5m2!1svi!2s"></iframe>
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

<style scoped>
form .form-control {
	background-color: #ffffff;
	border: none;
	height: 55px;
	font-size: 16px;
	border-left: 3px solid #142b73;
	box-shadow: 0px 5px 30px 0px rgba(148, 146, 245, 0.15);
}

form .form-control:focus {
		border-left: 3px solid #142b73;
		box-shadow: none;
	}

textarea.form-control {
	height: auto;
	padding-top: 15px;
	line-height: initial;	
}
.form-control {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    appearance: none;
    background-clip: padding-box;
    border: 1px solid #dee2e6;
    border-radius: 0.375rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out
}

</style>