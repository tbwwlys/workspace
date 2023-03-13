// 2.0文档
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import './assets/stylus/index.styl'

Vue.use(VueRouter)  // 给vue 添加router模块



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})