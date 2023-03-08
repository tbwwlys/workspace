// import App from './App.vue';    //  引入App.vue 但是 .vue 文件无法识别
import { createApp } from "vue";
import App from './App.vue'

const app = createApp(App) 
app.mount('#root')


const root = document.getElementById('root')
root.textContext = '你喵贵姓';