import { createApp } from 'vue'
// import './style.css'    
import App from './App.vue'
import {
    Swipe
} from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'  //移动端适配就做好了
import './assets/main.css' // reset
import router from './router'   //启用路由
// 启用全家桶
// router
// store 
// vant


const app = createApp(App)
app
    .use(Swipe)
    .use(router)    // spa single page application  路由接管一切
    .mount('#app') 
