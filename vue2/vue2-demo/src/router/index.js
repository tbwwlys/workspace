import VueRouter from 'vue-router'
import goods from '../views/goods/goods.vue'

const routes = [{
    path: '/',
    components: goods
    // redirect: '/goods'
},{
    path: '/goods',
    component: goods
}]
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
})

export default router 