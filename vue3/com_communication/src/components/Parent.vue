<template>
    <!-- <child ref="childComp" :count="count" :msg2="msg2" :msg1="msg1" @myClick="onMyClick"></child> 
    <child :count="count" :msg2="msg2" :msg1="msg1" @myClick="onMyClick"></child>  -->
    <child v-model:key="key" v-model:value="value"></child>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import child from './Child.vue'

const key = ref('11111')
const value = ref('22222')

// const childComp = ref(null)
// const count = ref(0)
// const msg1 = ref('msg1')
// const msg2 = ref('msg2')
// const onMyClick = () => {


// }

// onMounted(() => {
//     console.log(childComp.value.childName)
//     childComp.value.someMethod()
// })
 // import Child from "./Child.vue"
// import { ref, reactive } from "vue"
// const childComp = ref(null) // ref 标注 拿到组件对象或DOM对象
// export default {
//     data(){
//         return {
//             msg1:"这是传级子组件的信息1"
//         }
//     },
//     setup(){
//         // 创建一个响应式数据
        
//         // 写法一 适用于基础类型  ref 还有其他用处，下面章节有介绍
//         const msg2 = ref("这是传级子组件的信息2")
        
//         // 写法二 适用于复杂类型，如数组、对象
//         // const msg2 = reactive(["这是传级子组件的信息2"])
//         const count = ref(0);
//         return {
//             msg2,
//             count
//         }
//     },
//     methods: {
//         onMyClick() {
//             console.log('父组件里运行的onMyClick')
//             this.count++
//         }
//     },
//     mounted() {
//         console.log(childComp)
//     },
//     components: {
//         Child
//     }
// }
</script>