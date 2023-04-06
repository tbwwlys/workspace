import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Home.vue'
import Signup from '../views/Home.vue'
import PostDetail from '../views/Home.vue'
import ColumnDetail from '../views/Home.vue'
import CreatePost from '../views/CreatePost.vue'
import { compile } from 'vue'
import store from '../store'
// 
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                redirectAlreadyLogin: true
            },
            component: Login
        },
        {
            path: '/signup',
            name: 'signup',
            meta: {
                redirectAlreadyLogin: true
            },
            component: Signup
        },
        {
            path: '/create',
            name: 'create',
            component: CreatePost,
            meta: {
                requiredLogin: true
            }
        },
        {
            path: '/column/:id',
            name: 'column',
            component: ColumnDetail
        },
        {
            path: '/posts/:id',
            name: 'post',
            component: PostDetail
        },
        {
            path: '/*',
            name: 'notFound',
            component: () => import ('../views/NotFound.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {

})

export default router
