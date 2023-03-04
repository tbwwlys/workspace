<script setup lang="ts">
import { useProductStore, Product } from './store/products';

const productStore = useProductStore()
productStore.fetchAll()
</script>

<template>
<ul style="list-style: none">
    <li v-for="product in productStore.all" :key="product.id">
        商品的名称 {{ product.title }}
        商品的评分 {{ product.rating.rate }}
    </li>
</ul>
</template>

<style scoped>

</style>
