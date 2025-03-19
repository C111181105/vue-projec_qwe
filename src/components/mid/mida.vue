<script setup>
import { ref } from "vue"; // 使用 Vue 3 的 ref 來管理反應性資料
import { RouterView } from "vue-router";

// 產品資料，存放不同產品的資訊

const products = ref([
  {
    id: 1,

    text: "海上活動智慧客服",
    image: "/mida-1.png",
    link: "/midb" // 這個應該是 Vue Router 內部路由
    
  },
  {
    id: 2,
    text: "推薦裝備",
    image: "/mida-2.png",
    link: "https://www.ronin.com.tw/v2/official/SalePageCategory/491821?lang=zh-TW&srsltid=AfmBOoqPxBUoa3CjI0fcStOcTcZBhtA3DuooR2Pf9zQ1LpDd-0dg8PYe&sortMode=Newest", // 內部路由
  },
  {
    id: 3,
    text: "氣象預測 海浪預測",
    image: "/mida-3.png",
    link: 'https://www.cwa.gov.tw/V8/C/W/County/County.html?CID=64'
  },
  {
    id: 4,
    text: "開發社群",
    image: "/mida-4.png",
    link: 'https://www.ronin.com.tw/v2/official/SalePageCategory/491821?lang=zh-TW&srsltid=AfmBOoqPxBUoa3CjI0fcStOcTcZBhtA3DuooR2Pf9zQ1LpDd-0dg8PYe&sortMode=Newest'
  },
  {
    id: 5,
    text: "語音功能",
    image: "/mida-5.png",
    link: "/midb" 
    
  },
  {
    id: 6,
    text: "警示系統",
    image: "/mida-6.png",
    link: "/midb" 
    
  },
  {
    id: 7,
    text: "行程規劃 推薦飯店",
    image: "/mida-7.png",
    link: "/midb" 
    
  },
]);
</script>

<template>
  <!-- 產品方塊的主要容器 -->
  <div class="products-container">
    <!-- 迴圈渲染產品，每個產品會變成一個方塊 -->
    <div v-for="(product, index) in products" :key="product.id" class="product-section">
      
      <!-- 產品圖片區塊 -->
      <div class="product-image-container">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <span class="background-text">{{ product.text }}</span> <!-- 顯示對應的產品文字 -->
      </div>

      <!-- 產品資訊區塊 -->
      <div class="product-info">
        <!-- 根據連結類型選擇 RouterLink 或 a 標籤 -->
        <RouterLink v-if="product.link.startsWith('/')" :to="product.link" class="buy-button">了解更多</RouterLink>
        <a v-else :href="product.link" target="_blank" class="buy-button">了解更多</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 產品方塊的主要容器 */
.products-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
}

/* 每個產品區塊 */
.product-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 300px;
  background: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
  position: relative;
}

/* 產品圖片區塊 */
.product-image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 產品圖片上的文字 */
.background-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

/* 產品圖片 */
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

/* 產品資訊區塊 */
.product-info {
  width: 100%;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 了解更多按鈕 */
.buy-button {
  display: inline-block;
  padding: 10px 20px;
  background: #0071e3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}

/* 滑鼠懸停時按鈕變色 */
.buy-button:hover {
  background: #005bb5;
}

/* 響應式設計：在手機上改為單列 */
@media (max-width: 768px) {
  .products-container {
    grid-template-columns: 1fr;
  }
  .product-section {
    width: 100%;
  }
}
</style>







