import { createRouter, createWebHashHistory } from "vue-router";
import home from '../views/Home.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'home',
            component: home
        }
    ]
})