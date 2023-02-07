import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// 全局引入 要考虑性能问题
import 'element-plus/dist/index.css'
import {
    ElButton,
    ElCard
} from 'element-plus'

const app = createApp(App)
app
    .use(ElButton)   /* 组件 ElButton 变成全局组件 */
    .use(ElCard)
app.mount('#app')
