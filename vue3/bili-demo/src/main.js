import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import '@/mock/index' // 模拟数据

const app = createApp(App)
app 
    
    .use(router)
    .mount('#app')
