import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { Swiper } from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import './assets/main.css'
import router from './router'

const app = createApp(App)
app 
    .use(router)
    .mount('#app')
