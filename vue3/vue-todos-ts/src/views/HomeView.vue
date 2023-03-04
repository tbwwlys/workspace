<script setup lang="ts">
import { useTodoStore } from '../store/todos'

const todoStore = useTodoStore()
todoStore.addTodo('十天后面试') 
</script>

<template>
<div>
    HomeView
</div>

</template> 

<style>

</style>