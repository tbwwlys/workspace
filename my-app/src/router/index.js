import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '/home',
                component: Home,
                name: 'home'
            },
            {
                path: '/user',
                component: User,
                name: 'user'
            }
        ]
    }
    
]

const router = new VueRouter({
    routes
})

export default router