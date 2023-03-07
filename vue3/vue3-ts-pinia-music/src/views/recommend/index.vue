<template>
    <div class="recommend">
        <Banners v-if="banners.length" :banners="banners" />
    </div>
</template>

<script setup lang="ts">
import { onMounted,computed } from 'vue';
import { useRecommendStore } from '@/store/recommend'
import Banners from '@/components/banners/index.vue'

const recommendStore = useRecommendStore()
const banners = computed(() => recommendStore.banners)

onMounted(async () => {
    const bannersData = await recommendStore.getBannersData()
    console.log(bannersData)
})
</script>

<style scoped>

</style>