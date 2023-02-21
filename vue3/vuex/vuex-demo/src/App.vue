<script setup>
// export default {
//   setup() {
//     return {
//       msg2: 'hehe'
//     }
//   },
//   mounted() {
//     console.log(this, this.msg2, '////')
//   }
// }
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()  // provide + inject
// // const count = ref(store.state.count) //私有状态
const count = computed(() => store.state.count)  // 响应式归中央管 来到本地依然是数据状态   
console.log(store, '////')
const addCount = () => {
  store.commit('add')
}
</script>

<template>
<div>
  {{ $store.state.count }}
  <p>{{ count }}</p>dfdfdf
  <!-- <div>{{ msg2 }}</div> -->
</div>
<button @click="$store.commit('add')">加一</button>
<button @click="addCount">加一二</button>
</template>

<style scoped>

</style>
