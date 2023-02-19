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
    ElMenuItem,
    ElForm,
    ElFormItem,
    ElInput,
    ElButton,
    ElCheckbox,
    ElCard,
    ElPopconfirm,
    ElTable,
    ElTableColumn,
    ElPagination,
    ElDialog,
    ElUpload,
    ElIcon

} from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia' //
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 启用路由 路由接管项目
// 组件库 按需加载
// css reset 




const app = createApp(App)  //web app

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)   
}

app
    .use(router)    //前端路由
    .use(createPinia()) // 中央数据管理
    //全局组件
    .use(ElContainer)
    .use(ElAside)
    .use(ElMenu)
    .use(ElSubMenu)
    .use(ElMenuItemGroup)
    .use(ElMenuItem)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElButton)
    .use(ElCheckbox)
    .use(ElCard)
    .use(ElPopconfirm)
    .use(ElTable)
    .use(ElTableColumn)
    .use(ElPagination)
    .use(ElDialog)
    .use(ElUpload)
    .use(ElIcon)
    .mount('#app')   // 挂载
