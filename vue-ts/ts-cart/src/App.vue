<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useProductsStore } from './store/products'
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'

const productsStore = useProductsStore()
const all = computed(() => productsStore.state.all)

onMounted(async () => {
  await productsStore.loadAllProducts();
})
console.log(all)

</script>

<template>
{{ all.length }}
<h1>购物车</h1>
<hr>
<h1>商品列表</h1>
<ProductsList></ProductsList>
<hr>
<Cart></Cart>
</template>

<style scoped>

</style>
