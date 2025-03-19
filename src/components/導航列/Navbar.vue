<template>
  <!-- 導覽列 -->
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo">
      <img src="/navber/navber-1.png" alt="Logo" class="logo-icon">
      <RouterLink to="/midc">智慧海洋遊憩</RouterLink> 
    </div>

    <!-- 導覽列選單 -->
    <ul class="nav-links">
      <!-- 釣點選單 (有下拉選單) -->
      <li class="nav-item">
        <RouterLink to="/midb">海上活動智慧客服</RouterLink></li>
      <li><a href="https://www.ronin.com.tw/v2/official/SalePageCategory/491821?lang=zh-TW&srsltid=AfmBOop1scZe1QJ9pS5u7g6SyikZfX-1e3UREyYQZAb8BWdEdia_ok2g&sortMode=Newest/" target="_blank" rel="noopener noreferrer">推薦裝備</a></li>  
      <li><a href="https://www.cwa.gov.tw/V8/C/W/County/County.html?CID=64/" target="_blank" rel="noopener noreferrer">氣象、海浪預測</a></li>
      <li><a href="https://www.youtube.com/shorts/2x6wD7KwEEQ/" target="_blank" rel="noopener noreferrer">開發社群</a></li>
      <li><RouterLink to="/about">語音功能</RouterLink></li>
      <li><RouterLink to="/about">警示系統</RouterLink></li>
      <li><RouterLink to="/about">行程規劃 推薦飯店</RouterLink></li>  
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router"; // 引入 Vue Router 的 RouterLink，讓我們可以建立內部導航
</script>

<style scoped>
/* ======== 導覽列樣式 ======== */
.navbar {
  display: flex; /* 讓 Logo 和選單水平排列 */
  align-items: center; /* 讓內容垂直置中 */
  justify-content: center; /* 讓選單區域在中間 */
  padding: 15px 30px; /* 增加內距，確保視覺舒適 */
  background-color: #87CEEB; /* ✅ 設定為天藍色 */
  background-size: cover; /* ✅ 讓圖片填滿導覽列 */
  color: white; /* 設定文字顏色為白色 */
  position: fixed; /* 讓導覽列固定在頂部 */

  width: 100%; /* 讓導覽列寬度填滿整個螢幕 */
  top: 0; /* 固定在頂部 */
  left: 0;
  z-index: 1000; /* 設定較高的層級，確保不被其他元素蓋住 */
}

/* ======== Logo 樣式 ======== */
.logo {
  position: absolute;
  left: 30px; /* 讓 Logo 固定在左側 */
  display: flex; /* 讓 Logo 和圖示水平排列 */
  align-items: center; /* 讓它們垂直置中 */
  gap: 5px; /* ✅ 調整圖示與文字的間距 */
}

.logo img {
  width: 18px; /* ✅ 調小圖示的寬度 */
  height: 18px; /* ✅ 調小圖示的高度 */
  object-fit: contain; /* ✅ 確保圖片不變形 */
}

/* Logo 文字顏色 */
.logo a {
  color: greenyellow; /* 讓 Logo 變成紅色 */
  text-decoration: none; /* 移除底線 */
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;  /* ✅ 不允許換行 */
  overflow: hidden;  /* ✅ 隱藏超出的內容 */
  text-overflow: ellipsis;  /* ✅ 超出時用省略號表示 */
}

/* 滑鼠懸停時 Logo 變色 */
.logo a:hover {
  color: yellow;
}

/* ======== 導覽列選單樣式 ======== */
.nav-links {
  list-style: none; /* 移除列表點點 */
  display: flex; /* 使用 Flexbox 讓選單水平排列 */
  gap: 30px; /* 增加選單之間的間距 */
  position: absolute;
  left: 50%; /* 讓選單置中 */
  transform: translateX(-50%); /* 讓選單完全置中 */
  max-width: 80%;  /* ✅ 限制最大寬度，避免內容擠壓 */
  flex-wrap: nowrap; /* ✅ 禁止內容換行 */
  justify-content: space-between; /* ✅ 平均分佈 */
}

/* 選單內的連結樣式 */
.nav-links a {
  color: white; /* 設定選單的文字顏色 */
  text-decoration: none; /* 移除底線 */
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;  /* ✅ 不允許換行 */
  overflow: hidden;  /* ✅ 隱藏超出的內容 */
  text-overflow: ellipsis;  /* ✅ 超出時用省略號表示 */
  padding: 10px 15px; /* ✅ 增加內距，確保選單項目不太擁擠 */
} 

/* 滑鼠懸停時，下拉選單的選項變成深灰色 */
.dropdown li:hover {
  background: #333; /* ✅ 讓選單懸停時變成深灰色 */
}

/* 當鼠標移到 "釣點" 選單時，顯示下拉選單 */
.nav-item:hover .dropdown {
  display: block;
}
</style>
