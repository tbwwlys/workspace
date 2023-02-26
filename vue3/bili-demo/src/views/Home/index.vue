<script setup>
import AppHeader from '@/components/AppHeader.vue'
import HomeChannel from '@/components/HomeChannel.vue'
import HomeSwipe from '@/components/HomeSwipe.vue'
import HomeVideoList from '@/components/HomeVideoList.vue'
import { onMounted } from 'vue'
import axios from 'axios'
import { getSwiperList, getVideosList } from '@/service/home.js'

onMounted(() => {
    const swiperData = await getSwiperList()
    const videoData = await getVideosList()
})

</script>

<template>
<div>
    <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <!-- 频道组件 -->
  <HomeChannel></HomeChannel>
  <!-- 轮播图 -->
  <HomeSwipe></HomeSwipe>
    <!-- 视频组件 容器组件 -->
  <HomeVideoList></HomeVideoList>
</div>
</template>

<style scoped>

</style>
