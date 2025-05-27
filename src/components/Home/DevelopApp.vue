<script setup>
import Tab from './Tab.vue'
const tabs = [
  { label: 'VBot - Tổng đài AI đa tính năng', slot: 'tab1' },
  { label: 'VScan - Ứng dụng quét tài', slot: 'tab2' },
  { label: 'Văn phòng điện tử', slot: 'tab3' },
  { label: 'Golden Health', slot: 'tab4' }
]
</script>

<template>
    <section class="text-[#ffffff] bg-[#fafbfc] px-0 py-100px">
    <div class="container">
        <div class="row">
            <div class="col-66lg lg:!ml-16.66666667%">
                <div class="text-20px text-center mb-65px lh-normal">
                    <h6 class="text-16px font-700 text-[#ec5a26] tracking-0.5px uppercase">Ứng Dụng Chúng Tôi Đã Phát Triển</h6>
                    <h2 class="text-30px text-[#0b0b31] mt-10px mb-0 ml-0 mr-0 font-700 uppercase">Chúng tôi tự hào giới thiệu các ứng dụng tiêu biểu.</h2>
                </div>
            </div>
        </div>
        <Tab :tabs="tabs">
            <template #tab1>
                <div class="row !items-center mx--3">
                        <div class="col-58lg">
                            <div class="tab-solution-content">
                                <h3>VBot - Tổng đài AI đa tính năng</h3>
                                <p>
                                    VBot là giải pháp tổng đài AI thông minh, giúp doanh nghiệp tự động hóa chăm sóc
                                    khách hàng, tối ưu quy trình giao tiếp và nâng cao trải nghiệm người dùng. Với
                                    công nghệ AI tiên tiến, VBot có thể xử lý cuộc gọi, phản hồi tin nhắn và hỗ trợ
                                    khách hàng 24/7.
                                </p>
                                <ul class="tab-list">
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Tự động hóa tổng đài với AI, giảm thiểu
                                            chi phí vận hành
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Hỗ trợ đa kênh: thoại, SMS, chatbot, tích
                                            hợp với CRM
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Cung cấp báo cáo, phân tích dữ liệu và
                                        tối ưu hiệu suất tổng đài
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> SDK linh hoạt, dễ dàng tích hợp vào ứng
                                        dụng và hệ thống của doanh nghiệp
                                    </li>
                                </ul>
                                <p>
                                    Với khả năng linh hoạt, dễ dàng tùy chỉnh và tích hợp thông qua SDK mạnh mẽ, VBot
                                    là giải pháp hoàn hảo giúp doanh nghiệp nâng cao chất lượng dịch vụ khách hàng
                                    và tối ưu hiệu quả hoạt động.
                                </p>
                                <div class="mt-4">
                                    <a href="https://vbot.vn/" class="inline-block underline hover:underline text-16px hover:text-[#ff561d] text-[#ff561d] tracking-0.5px font-700">Xem thêm</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-41lg">
                            <div class="text-center">
                                <img src="/src/assets/img/product/vbot.png" alt="image">
                            </div>
                        </div>
                </div>
            </template>
            <template #tab2>
                <div class="row !items-center mx--3">
                        <div class="col-58lg">
                            <div class="tab-solution-content">
                                <h3>VScan - Ứng dụng quét tài liệu thông minh</h3>
                                <p>
                                    VScan là ứng dụng quét tài liệu mạnh mẽ, giúp bạn chuyển đổi giấy tờ, hợp đồng,
                                    hóa đơn và nhiều loại tài liệu khác sang định dạng kỹ thuật số một cách nhanh
                                    chóng và chính xác. Với công nghệ nhận diện ký tự quang học (OCR) tiên tiến,
                                    VScan giúp bạn lưu trữ, tìm kiếm và chia sẻ tài liệu dễ dàng.
                                </p>
                                <ul class="tab-list">
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Quét tài liệu nhanh chóng với chất lượng
                                        hình ảnh sắc nét
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Công nghệ OCR nhận diện và chuyển đổi văn
                                        bản chính xác
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Hỗ trợ nhiều định dạng lưu trữ: PDF, JPG,
                                        PNG
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Dễ dàng chia sẻ tài liệu qua email, cloud
                                        hoặc các ứng dụng khác
                                    </li>
                                </ul>
                                <p>
                                    Với VScan, bạn có thể số hóa tài liệu một cách tiện lợi, tiết kiệm thời gian và
                                    nâng cao hiệu suất làm việc.
                                </p>
                            </div>
                        </div>
                        <div class="col-41lg">
                            <div class="text-center">
                                <img src="/src/assets/img/product/vscan.png" alt="image">
                            </div>
                        </div>
                </div>
            </template>
            <template #tab3>
                <div class="row !items-center mx--3">
                        <div class="col-58lg">
                            <div class="tab-solution-content">
                                <h3>VOffice - Ứng dụng Văn phòng điện tử</h3>
                                <p>
                                    VOffice là giải pháp văn phòng điện tử giúp doanh nghiệp số hóa quy trình làm
                                    việc, quản lý tài liệu, điều hành công việc và tối ưu hiệu suất làm việc. Với
                                    giao diện thân thiện và hệ thống thông minh, VOffice giúp kết nối nhân sự, giảm
                                    thiểu thủ tục giấy tờ và nâng cao hiệu quả quản lý.
                                </p>
                                <ul class="tab-list">
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Quản lý công việc, phân quyền và theo dõi
                                        tiến độ dễ dàng
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Lưu trữ, tìm kiếm và chia sẻ tài liệu
                                        nhanh chóng
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Ký số, phê duyệt và xử lý hồ sơ trực
                                        tuyến an toàn
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Tích hợp email, lịch làm việc và hệ thống
                                        thông báo thông minh
                                    </li>
                                </ul>
                                <p>
                                    Với VOffice, doanh nghiệp có thể hiện đại hóa mô hình làm việc, tiết kiệm thời
                                    gian và nâng cao năng suất lao động.
                                </p>

                            </div>
                        </div>
                        <div class="col-41lg">
                            <div class="text-center">
                                <img src="/src/assets/img/product/voffice.png" alt="image">
                            </div>
                        </div>
                </div>
            </template>
            <template #tab4>
                <div class="row !items-center mx--3">
                        <div class="col-58lg">
                            <div class="tab-solution-content">
                                <h3>Golden Health - Ứng dụng theo dõi sức khỏe toàn diện</h3>
                                <p>
                                    Golden Health là ứng dụng giúp bạn quản lý và theo dõi sức khỏe cá nhân một cách
                                    hiệu quả. Với các tính năng thông minh, ứng dụng hỗ trợ ghi nhận các chỉ số quan
                                    trọng, nhắc nhở lịch khám và đưa ra phân tích sức khỏe dựa trên dữ liệu thực tế.
                                </p>
                                <ul class="tab-list">
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Theo dõi nhịp tim, huyết áp, cân nặng và
                                        các chỉ số sức khỏe quan trọng
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Ghi chép nhật ký sức khỏe và quá trình
                                        điều trị
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Nhắc nhở uống thuốc, lịch khám bệnh và
                                        tập luyện
                                    </li>
                                    <li>
                                        <font-awesome-icon icon="fas fa-check-circle" class="h-4 w-4 color-[#142b73]"/> Phân tích sức khỏe và đề xuất cải thiện
                                        thể trạng
                                    </li>
                                </ul>
                                <p>
                                    Với Golden Health, bạn có thể chủ động chăm sóc sức khỏe, xây dựng lối sống lành
                                    mạnh và phòng ngừa rủi ro bệnh tật.
                                </p>

                            </div>
                        </div>
                        <div class="col-41lg">
                            <div class="text-center">
                                <img src="/src/assets/img/product/golden_health.png" alt="image">
                            </div>
                        </div>
                </div>
            </template>
        </Tab>
    </div>
  </section>
</template>