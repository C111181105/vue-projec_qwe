<template>
  <div class="chat-container">
    <h1>AI對話助手</h1>

    <p class="status-message">{{ connectionStatus }}</p>
    
    <!-- 對話內容區 -->
    <div class="chat-box">
      <div v-for="(message, index) in messages" :key="index" :class="{'user-message': message.isUser, 'bot-message': !message.isUser}">
        {{ message.text }}
      </div>
    </div>

    <!-- 輸入框 -->
    <div class="chat-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="輸入訊息..." />
      <button @click="sendMessage">送出</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";  // 確保你有安裝 axios (npm install axios)

// 記錄對話內容
const messages = ref([]);
// 記錄使用者輸入的訊息
const newMessage = ref("");
// 追蹤 API 連接狀態
const connectionStatus = ref("⏳ 連線中...");

// 模擬與 RAG 連接
const fetchResponse = async (userInput) => {
  try {
    const response = await axios.post("http://192.168.0.13:1234/詢問/詢問", {  // 修正 API 端點
      question: userInput  // 確保符合 API 要求的字段名稱
    }, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    connectionStatus.value = "✅ 連接成功";
    console.log("✅ FastAPI 回應：", response.data);
    
    // 確保返回正確的字段
    return response.data?.data?.answer || "未獲得有效回應";
  } catch (error) {
    connectionStatus.value = "❌ 連接失拜";
    console.error("API 請求錯誤：", error);
    return "AI 回應失敗，請稍後再試。";
  }
};



// 送出訊息
const sendMessage = async () => {
  if (newMessage.value.trim() !== "") {
    messages.value.push({ text: newMessage.value, isUser: true }); // 加入用戶訊息
    let response = await fetchResponse(newMessage.value); // 取得 AI 回應
    messages.value.push({ text: response, isUser: false }); // 加入 AI 回應
    newMessage.value = ""; // 清空輸入框
  }
};
</script>

<style scoped>
.chat-container {
  width: 1000px;
  height: 700px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  text-align: center;
  background-color: #f8f8f8;
}

.chat-box {
  height: 560px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 10px;
}

.user-message {
  padding: 12px;
  margin: 8px 0;
  background: #cde7ff;
  border-radius: 8px;
  text-align: right;
  font-size: 18px;
}

.bot-message {
  padding: 12px;
  margin: 8px 0;
  background: #e1e1e1;
  border-radius: 8px;
  text-align: left;
  font-size: 18px;
}

.chat-input {
  display: flex;
  gap: 15px;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.chat-input button {
  padding: 10px 15px;
  background: blue;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

.chat-input button:hover {
  background: darkblue;
}

.status-message {
  font-size: 18px;
  font-weight: bold;
  color: black; /* 預設為黑色 */
  margin-bottom: 10px;
}

</style>
