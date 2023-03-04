// typescript = js + 强类型 type 类型 script 脚本 js 超集
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        }
    ] as RouteRecordRaw[]

})

export default router