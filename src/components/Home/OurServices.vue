<template>
    <section id="services-section" class="bg-[#fafbfc] px-0 py-100px">
    <div class="container">
        <div class="row">
                <div class="text-20px text-center mb-65px lh-normal">
                    <h6 class="text-16px font-700 text-[#ec5a26] tracking-0.5px uppercase">Những Gì Chúng Tôi Cung Cấp</h6>
                    <h2 class="text-30px text-[#0b0b31] mt-10px mb-0 ml-0 mr-0 font-700 uppercase">Dịch Vụ Của Chúng Tôi</h2>
                </div>
        </div>
        <div class="row">
            <div class="col-33lg col-50maxlgsm">
                <div class="group rotate-icon relative z-1 block py-35px px-30px text-left rounded-3px bg-[#ffffff] mt-30px [transition:all_500ms_ease-out] [box-shadow:5px_7px_15px_2px_rgba(82,90,101,0.12)]">
                    <div class="inline-block mb-15px [transition:0.5s] group-hover:[transform:rotateY(180deg)]">
                        <i class="content-[''] inline-block h-50px w-50px bg-[url(/src/assets/img/service/van-hanh-he-thong.png)] bg-[length:cover]"></i>
                    </div>
                    <h3 class="text-black font-bold mb-0 [transition:all_400ms_ease-out] text-5" >Vận hành hệ thống</h3>
                    <p class="text-4 mt-15px mb-0 [transition:all_400ms_ease-out]">
                        Cung cấp giải pháp quản lý, giám sát và tối ưu hóa hệ thống máy chủ, mạng và hạ tầng công
                        nghệ thông tin. Đảm bảo hệ thống hoạt động ổn định, an toàn và hiệu quả.
                    </p>
       
                    <div class="mt-4">
                        <RouterLink to="/dich-vu/van-hanh-he-thong" class="inline-block text-4 !text-[#142b73] tracking-0.5px font-bold [transition:all_400ms_ease-out] underline hover:underline">Chi tiết</RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-33lg col-50maxlgsm">
                <div class="group rotate-icon relative z-1 block py-35px px-30px text-left rounded-3px bg-[#ffffff] mt-30px [transition:all_500ms_ease-out] [box-shadow:5px_7px_15px_2px_rgba(82,90,101,0.12)]">
                    <div class="inline-block mb-15px [transition:0.5s] group-hover:[transform:rotateY(180deg)]">
                        <i class="content-[''] inline-block h-50px w-50px bg-[url(/src/assets/img/service/tin-nhan-sms.png)] bg-[length:cover]"></i>
                    </div>
                    <h3 class="text-black font-bold mb-0 [transition:all_400ms_ease-out] text-5">Tin nhắn SMS</h3>
                    <p class="text-4 mt-15px mb-0 [transition:all_400ms_ease-out]">
                        Dịch vụ SMS Brandname giúp doanh nghiệp gửi tin nhắn quảng cáo, chăm sóc khách hàng, OTP,
                        thông báo giao dịch với độ tin cậy cao, tốc độ nhanh và chi phí hợp lý.
                    </p>
                    <div class="mt-4">
                        <RouterLink to="/dich-vu/tin-nhan-sms" class="inline-block text-4 !text-[#142b73] tracking-0.5px font-bold [transition:all_400ms_ease-out] underline hover:underline">Chi tiết</RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-33lg col-50maxlgsm">
                <div class="group rotate-icon relative z-1 block py-35px px-30px text-left rounded-3px bg-[#ffffff] mt-30px [transition:all_500ms_ease-out] [box-shadow:5px_7px_15px_2px_rgba(82,90,101,0.12)]">
                    <div class="inline-block mb-15px [transition:0.5s] group-hover:[transform:rotateY(180deg)]">
                        <i class="content-[''] inline-block h-50px w-50px bg-[url(/src/assets/img/service/cuoc-goi-thuong-hieu.png)] bg-[length:cover]"></i>
                    </div>
                    <h3 class="text-black font-bold mb-0 [transition:all_400ms_ease-out] text-5">Cuộc gọi thương hiệu</h3>
                    <p class="text-4 mt-15px mb-0 [transition:all_400ms_ease-out]">
                        Dịch vụ Voice Brandname cho phép doanh nghiệp thực hiện các cuộc gọi hiển thị tên thương
                        hiệu, giúp tăng độ nhận diện, tin cậy và hiệu quả tiếp cận khách hàng.
                    </p>
                    <div class="mt-4">
                        <RouterLink to="/dich-vu/cuoc-goi-thuong-hieu" class="inline-block text-4 !text-[#142b73] tracking-0.5px font-bold [transition:all_400ms_ease-out] underline hover:underline">Chi tiết</RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-33lg col-50maxlgsm">
                <div class="group rotate-icon relative z-1 block py-35px px-30px text-left rounded-3px bg-[#ffffff] mt-30px [transition:all_500ms_ease-out] [box-shadow:5px_7px_15px_2px_rgba(82,90,101,0.12)]">
                    <div class="inline-block mb-15px [transition:0.5s] group-hover:[transform:rotateY(180deg)]">
                        <i class="content-[''] inline-block h-50px w-50px bg-[url(/src/assets/img/service/dich-vu-gia-tri-gia-tang.png)] bg-[length:cover]"></i>
                    </div>
                    <h3 class="text-black font-bold mb-0 [transition:all_400ms_ease-out] text-5">Dịch vụ GTGT (Giá trị gia tăng)</h3>
                    <p class="text-4 mt-15px mb-0 [transition:all_400ms_ease-out]">
                        Cung cấp các giải pháp gia tăng giá trị cho khách hàng như tổng đài ảo, USSD, dịch vụ nội
                        dung số, đăng ký thuê bao tự động, hỗ trợ doanh nghiệp tiếp cận khách hàng hiệu quả hơn và
                        nâng cao trải nghiệm người dùng.
                    </p>
                    <div class="mt-4">
                        <RouterLink to="/dich-vu/dich-vu-gia-tri-gia-tang" class="inline-block text-4 !text-[#142b73] tracking-0.5px font-bold [transition:all_400ms_ease-out] underline hover:underline">Chi tiết</RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-33lg col-50maxlgsm">
                <div class="group rotate-icon relative z-1 block py-35px px-30px text-left rounded-3px bg-[#ffffff] mt-30px [transition:all_500ms_ease-out] [box-shadow:5px_7px_15px_2px_rgba(82,90,101,0.12)]">
                    <div class="inline-block mb-15px [transition:0.5s] group-hover:[transform:rotateY(180deg)]">
                        <i class="content-[''] inline-block h-50px w-50px bg-[url(/src/assets/img/service/phat-trien-ung-dung-va-games.png)] bg-[length:cover]"></i>
                    </div>
                    <h3 class="text-black font-bold mb-0 [transition:all_400ms_ease-out] text-5">Phát triển ứng dụng và games</h3>
                    <p class="text-4 mt-15px mb-0 [transition:all_400ms_ease-out]">
                        Dịch vụ thiết kế, lập trình và triển khai các ứng dụng di động, web, phần mềm tùy chỉnh theo
                        nhu cầu doanh nghiệp. Ngoài ra, chúng tôi cũng phát triển game mobile và nền tảng tương tác
                        trực tuyến.
                    </p>
                    <div class="mt-4">
                        <RouterLink to="/dich-vu/phat-trien-ung-dung-va-games" class="inline-block text-4 !text-[#142b73] tracking-0.5px font-bold [transition:all_400ms_ease-out] underline hover:underline">Chi tiết</RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-33lg col-50maxlgsm">
                <div class="group rotate-icon relative z-1 block py-35px px-30px text-left rounded-3px bg-[#ffffff] mt-30px [transition:all_500ms_ease-out] [box-shadow:5px_7px_15px_2px_rgba(82,90,101,0.12)]">
                    <div class="inline-block mb-15px [transition:0.5s] group-hover:[transform:rotateY(180deg)]">
                        <i class="content-[''] inline-block h-50px w-50px bg-[url(/src/assets/img/service/giai-phap-tong-dai.png)] bg-[length:cover]"></i>
                    </div>
                    <h3 class="text-black font-bold mb-0 [transition:all_400ms_ease-out] text-5">Giải pháp tổng đài VoIP</h3>
                    <p class="text-4 mt-15px mb-0 [transition:all_400ms_ease-out]">
                        Cung cấp và triển khai tổng đài IP (VoIP) giúp doanh nghiệp tối ưu chi phí, nâng cao hiệu suất và cải thiện trải nghiệm khách hàng. Hỗ trợ gọi nội bộ miễn phí, ghi âm, IVR, báo cáo chi tiết và tích hợp CRM.
                    </p>
                    <div class="mt-4">
                        <RouterLink to="/giai-phap/tong-dai-voip" class="inline-block text-4 !text-[#142b73] tracking-0.5px font-bold [transition:all_400ms_ease-out] underline hover:underline">Chi tiết</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>