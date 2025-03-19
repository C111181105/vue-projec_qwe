<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/導航列/Navbar.vue";  // 導航列表
import Mid from "./components/mid/mida.vue";  // 暫時沒用處
import router from "./router"; // ← 路由器
</script>

<template>
  <div class="app-container">
    <Navbar />  <!-- ✅ 確保這裡有加上 Navbar，讓它顯示在頁面上 -->
  <div class="content">
    
    <RouterView />  <!-- 這裡會根據路由顯示不同的頁面 -->
  </div>
  </div>
</template>

<style scoped>
/* 確保 App.vue 背景圖片生效 */
.app-container {
  background-color: white; 
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 設定 content，讓 Mid 置中 */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;  /* 水平置中 */
  justify-content: center;  /* 垂直置中 */
  flex-grow: 1;  /* 讓它填滿剩餘空間 */
  width: 100%;
  text-align: center;
}

/* 🚀 這裡如果要改變 Navbar 內的 Logo，無法直接改，因為 Navbar 的 style 是 scoped */
</style>
