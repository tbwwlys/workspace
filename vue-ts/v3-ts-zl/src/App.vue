<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { GlobalDataProps } from './types';
import GlobalHeader from './components/GlobalHeader.vue'
import { getColumn } from './api/column'
// pinia hooks 更好 defineStore
// 2. vuex 对ts 支持不如 pinia
// ref reactive 私有状态
const store = useStore<GlobalDataProps>()
const currentUser = computed(() => store.state.user)
getColumn()
  .then(data => {
    console.log(data)
  })
</script>

<template>
  <div class="container-fluid px-0 flex-shrink-0">
    <global-header :user="currentUser"></global-header>                                  
  </div>
  <router-view></router-view>

</template>

<style scoped>

</style>
