import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MidbView from '../components/智慧小助手/midb.vue'; // 確保路徑正確
import MidcView from '../components/首頁/midc.vue'; // 確保路徑正確
import wee from '../components/氣象、海浪預測/wee.vue';  // 氣象、海浪預測

const routes = [
  { path: "/", component: Home },
  { path: '/midb', component: MidbView },
  { path: '/midc', component: MidcView },
  { path: '/wee', component: wee }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;