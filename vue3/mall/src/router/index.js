// 路由对象
// 路由类型的对象
// 数组的配置
//  路由的懒加载
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'    //页面级别组件  
const router = createRouter({
    history: createWebHashHistory(),
    routes: [   /* 路由配置数组 */
        {
            path: '/',  //  根路径
            /* http 3xx 跳转状态码 */ 
            redirect: '/home' //跳转    
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]

})
export default router 