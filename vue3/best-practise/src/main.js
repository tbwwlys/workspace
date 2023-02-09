import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import router from './router/index'
import './assets/css/reset.css'

createApp(App)
// 链式调用
    .use(Element3)  // 启用Element3组件 全局组件
    .use(router)    // 启用路由     SPA
    .mount('#app')
    
