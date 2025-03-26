<template>
    <div>
      <h1>台北氣象觀測資料</h1>
      <div v-if="weatherData.length > 0">
        <div v-for="(item, index) in weatherData" :key="index">
          <p>{{ translateElementName(item.name) }}：{{ item.value }}</p>
        </div>
      </div>
      <div v-else>
        <p>載入中或無資料</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const weatherData = ref([]);
  
  const elementNameMap = {
    TEMP: '氣溫（℃）',
    HUMD: '相對濕度',
    PRES: '氣壓（hPa）',
    WDSD: '風速（m/s）',
    WDIR: '風向（°）',
    H_24R: '24 小時雨量（mm）',
  };
  
  const translateElementName = (code) => {
    return elementNameMap[code] || code;
  };
  
  onMounted(async () => {
    try {
      const res = await fetch('http://localhost:3000/weather');
      const data = await res.json();
      console.log('✅ 後端回傳資料:', data);
  
      const taipei = data.records.location.find(loc => loc.locationName === '臺北');
  
      if (taipei) {
        weatherData.value = taipei.weatherElement.map(el => ({
          name: el.elementName,
          value: el.elementValue
        }));
      }
    } catch (err) {
      console.error('❌ 抓資料失敗:', err);
    }
  });
  </script>
  