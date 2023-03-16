<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue'

const tel = ref('')
// 组件通用的条件的角度 如何？
// tel 跟组件 Input 双向绑定  而不是标签
// 父子组件之间通信props 单项的 props -> 子组件emit input 标签的change 传回来 修改 tel
setTimeout(() => {
  tel.value='13888888888'
})
</script>

<template>
  {{ tel }}
<Input v-model="tel" :disabled="true" placeholder="输入手机号码"/>
</template>

<style scoped>

</style>
