import Home from '../pages/Home.vue'    // 页面级别组件
import About from '../pages/About.vue'  
import { 
    createWebHashHistory,   //前端路由的形式 hash History api
    createRouter,   // 路由实例  前端路由对象
    createWebHistory 
} from 'vue-router'

const routes = [
    // 扩展性很好，
    {
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/',
        name: About,
        component: About
    }
]

const router = createRouter({
    //  配置前端路由
    history: createWebHashHistory(),
    routes
})

export default router