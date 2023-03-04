<script lang="ts" setup>
import { onMounted } from 'vue';
import { useProductsStore } from '../store/products';
import { useCartStore } from '../store/cart';

const cartStore = useCartStore()
const productsStore = useProductsStore()
onMounted(() => {
    productsStore.loadAllProducts()
})

</script>

<template>
<ul>
    <li v-for="item in productsStore.state.all" :key="item.id">
        {{ item.title }} - {{ item.price }}
        <button 
            :disabled="!item.inventory"
            @click="cartStore.addProductToCart(item)"
        >
            添加到购物车
        </button>
    </li>
</ul>
</template>

<style>

</style>