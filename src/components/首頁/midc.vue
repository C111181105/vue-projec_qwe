<template>
  <div class="page-container">
    <!-- ✅ 網站背景上的介紹文字 -->
    <div class="intro-section">
      <h1 class="intro-title">臺灣海洋遊憩指南｜探索、規劃、體驗，一站式服務</h1>
      <p class="intro-text">
        許多人可能不清楚海洋遊憩是什麼，顧名思義，它指的是各種海上活動。然而，目前市面上並沒有專門介紹海洋遊憩或提供指導的網站。因此，我們的團隊希望透過自身的力量，打造一款專屬於台灣的海洋遊憩 APP 與網站。
      </p>

      <p class="intro-text">
        我們的平台功能將包含：
        <br>✅ 線上助手——解決現場緊急狀況
        <br>✅ 推薦適合的裝備——讓大家貨比三家
        <br>✅ 氣象與海浪預測——提供即時資訊
        <br>✅ 社群語音功能——促進用戶交流
        <br>✅ 警示系統——確保遊憩安全
        <br>✅ 行程規劃——協助用戶安排最佳路線
        <br>✅ 飯店推薦——提供優質住宿選擇
      </p>

      <p class="intro-text">
        透過這些功能，我們希望讓使用者能夠感受到高品質與專業感，提供最完整的海洋遊憩體驗！🌊🚀
      </p>
    </div>

    <!-- ✅ Swiper 輪播圖 -->
    <div class="carousel-container">
      <swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :spaceBetween="30"
        :slidesPerView="1"
        :navigation="{}"   
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="carousel"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="slide-wrapper">
            <img :src="slide.image" alt="海洋遊憩" class="slide-image">
            <div class="slide-caption">{{ slide.caption }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slides = [
  { image: '/midc/midc-1.png', caption: '美麗的海岸線' },
  { image: '/midc/midc-2.png', caption: '刺激的水上活動' },
  { image: '/midc/midc-3.png', caption: '海上日落風景' },
  { image: '/midc/midc-4.png', caption: '悠閒的海灘時光' }
];
</script>

<style scoped>
/* ✅ 限制整個區塊的最大寬度，避免文字過寬 */
.page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* ✅ 介紹區塊 */
.intro-section {
  max-width: 800px; /* ✅ 限制最大寬度，避免文字太長 */
  padding: 20px;
  text-align: left; /* ✅ 讓內容左對齊，增加可讀性 */
}

/* ✅ 標題樣式 */
.intro-title {
  font-size: 32px;
  font-weight: bold;
  text-align: center; /* ✅ 標題保持置中 */
  margin-bottom: 15px;
}

/* ✅ 內文樣式 */
.intro-text {
  font-size: 18px;
  line-height: 1.6; /* ✅ 增加行距，讓文字更易讀 */
  color: #333;
  margin-bottom: 10px;
}

/* ✅ Swiper 輪播容器 */
.carousel-container {
  width: 100%;
  max-width: 900px;
  height: auto;
  margin-top: 30px; /* ✅ 讓輪播與介紹文字之間保持間距 */
  position: relative;
}

/* ✅ 圖片樣式 */
.slide-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

/*background-color: rgba(0, 0, 0, 0.5);*/
/* ✅ 圖片下方標題 */
.slide-caption {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);                               
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 15px;
  border-radius: 5px;
  text-align: center;
}
</style>
