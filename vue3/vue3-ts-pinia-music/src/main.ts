import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '@/assets/css/index.styl'

const app = createApp(App)
app 
    .use(router)
    .use(createPinia())
    .mount('#app')
