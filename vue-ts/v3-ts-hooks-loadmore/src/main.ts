import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app
    .use(router)
    .use(store)
    .mount('#app')
