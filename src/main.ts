
import { createApp } from "vue";
import App from "./App.vue";  // 確保這個檔案存在
import router from "./router"; // 確保 router/index.ts 存在並且匯出 router

const app = createApp(App);
app.use(router);
app.mount("#app");
