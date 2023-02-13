import { createApp } from 'vue'
// import './style.css'
import App from './App.vue' // 根组件
import router from '@/router'   // 路由配置 模块化
import {
    ElContainer,
    ElAside,
    ElMenu,
    ElSubMenu,
    ElMenuItemGroup,
    ElMenuItem
} from 'element-plus'
import 'element-plus/dist/index.css'
// 启用路由 路由接管项目
// 组件库 按需加载
// css reset 




const app = createApp(App)  //web app
app
    .use(router)
    //全局组件
    .use(ElContainer)
    .use(ElAside)
    .use(ElMenu)
    .use(ElSubMenu)
    .use(ElMenuItemGroup)
    .use(ElMenuItem)
    .mount('#app')   // 挂载
