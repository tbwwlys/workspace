<template>
<div>
    <ul>
        <li
            v-for="product in products"
            :key="product.id" 
        >
            {{ product.title }} - {{ product.price }}  - {{ product.inventory }}
            <br>
            <button
                :disabled="!product.inventory"
                @click="addProductToCart(product)"
            >
                Add to cart
            </button>
        </li>

    </ul>
    
    
    ProductList
    
</div>

</template>

<script setup>
// 接口请求数据 -> 数据不归组件管
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'


const store = useStore()
// console.log(store.state.products.all)
const products = computed(() => {
    return store.state.products.all
})

const addProductToCart = (product) => {
    // console.log('---------------------------')
    // actions
    store.dispatch('cart/addProductToCart', product)
}
// 生命周期
onMounted(() => {
    // 利用回调函数解决异步问题
    // shop.getProducts((products) => {
    //     console.log(products)
    // })
    // 请求数据的方法 dispatch 一个action
    store.dispatch('products/getAllProducts')
})


</script>

<style lang="styus" scoped>

</style>