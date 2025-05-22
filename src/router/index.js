import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ve-chung-toi',
    name: 've-chung-toi',
    component: () => import('../pages/ve-chung-toi.vue'),
    meta : { title : 'VPMEDIA - Về chúng tôi'}
  },
  {
    path: '/lien-he',
    name: 'lien-he',
    component: () => import('../pages/lien-he.vue'),
    meta : { title : 'VPMEDIA - Liên hệ'}
  },
  {
    path: '/dich-vu/tin-nhan-sms',
    name: 'tin-nhan-sms',
    component: () => import('../pages/tin-nhan-sms.vue'),
    meta : { title : 'VPMEDIA - Dịch Vụ Tin Nhắn SMS'}
  },
  {
    path: '/dich-vu/cuoc-goi-thuong-hieu',
    name: 'cuoc-goi-thuong-hieu',
    component: () => import('../pages/cuoc-goi-thuong-hieu.vue'),
    meta : { title : 'VPMEDIA - Cuộc Gọi Thương Hiệu'}
  },
  {
    path: '/dich-vu/dich-vu-gia-tri-gia-tang',
    name: 'dich-vu-gia-tri-gia-tang',
    component: () => import('../pages/dich-vu-gia-tri-gia-tang.vue'),
    meta : { title : 'VPMEDIA - Dịch Vụ Giá Trị Gia Tăng (VAS)'}
  },
  {
    path: '/dich-vu/phat-trien-ung-dung-va-games',
    name: 'phat-trien-ung-dung-va-games',
    component: () => import('../pages/phat-trien-ung-dung-va-games.vue'),
    meta : { title : 'VPMEDIA - Phát Triển Ứng Dụng & Games'}
  },
  {
    path: '/dich-vu/van-hanh-he-thong',
    name: 'van-hanh-he-thong',
    component: () => import('../pages/van-hanh-he-thong.vue'),
    meta : { title : 'VPMEDIA - Vận Hành Hệ Thống'}
  },
  {
    path: '/giai-phap/thu-dien-tu',
    name: 'thu-dien-tu',
    component: () => import('../pages/thu-dien-tu.vue'),
    meta : { title : 'VPMEDIA - Giải Pháp Thư Điện Tử'}
  },
  {
    path: '/giai-phap/tong-dai-tin-nhan',
    name: 'tong-dai-tin-nhan',
    component: () => import('../pages/tong-dai-tin-nhan.vue'),
    meta : { title : 'VPMEDIA - Giải Pháp Tổng Đài Tin Nhắn SMS'}
  },
  {
    path: '/giai-phap/tong-dai-voip',
    name: 'tong-dai-voip',
    component: () => import('../pages/tong-dai-voip.vue'),
    meta : { title : 'VPMEDIA - Giải Pháp Tổng Đài VoIP'}
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;