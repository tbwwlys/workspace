import { createApp } from 'vue'
// import './style.css'    
import App from './App.vue'
import {
    Swipe
} from 'vant'
import 'vant/lib/index.css'
// 启用全家桶
// router
// store 
// vant


const app = createApp(App)
app
    .use(router)    // spa single page application
    .mount('#app')
