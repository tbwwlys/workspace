import { createRouter, createWebHashHistory, RouteRecordRaw } from  'vue-router'
import Home from '@/views/Home.vue'

// <>泛型约束 泛指内部的类型
const routes: Array<RouteRecordRaw> = [
        {
            path: '/',
            name: "home",
            component: Home,
            redirect: '/recommend',
            children: [
                {
                    path: '/recommend',
                    name: 'recommend',
                    component: () => import('@/views/recommend/index.vue'),
                    meta: {
                        isCover: true
                    }
                }
            ]
        }
    ]
const router= createRouter({
    history: createWebHashHistory(),
    routes
})


export default router