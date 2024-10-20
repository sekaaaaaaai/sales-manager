// Vue Routerパッケージのインポート
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/page/Home.vue";
import Second from "../components/page/Second.vue";

const routes = [
  {path: '/', component: Home },
  {path: '/second', component: Second },

  // 存在しないパスは全てTOPへ
  // { path: '/:catchAll(.*)', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// router.beforeEach((to, from) => {
//   // URL直接入力の場合はTOPへ
//   if (to.path != '/' && from.name == undefined) {
//     return '/'
//   }
// })

export default router