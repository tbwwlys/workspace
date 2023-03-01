import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { 
    Swipe
} from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import './assets/main.css'
import router from './router/index.js'
const app = createApp(App)
app
    .use(Swipe)
    .use(router)
    .mount('#app')
