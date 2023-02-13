import { createRouter, createWebHashHistory } from "vue-router";
// import Introduce from '../router/Introduce'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [   /* 路由配置数组 */
        {
            path: '/',  //  根路径
            /* http 3xx 跳转状态码 */ 
            redirect: '/introduce' //跳转    
        },
        {
            path: '/introduce',
            name: 'introduce',
            component: () => import('@/views/Introduce.vue')
        }
    ]

})
export default router 