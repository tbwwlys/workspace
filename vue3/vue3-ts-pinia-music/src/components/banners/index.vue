<template>
    <div>
        {{ JSON.stringify(banners) }}
    </div>
</template>

<script setup lang="ts">
import { json } from 'stream/consumers';

defineProps({
    banners: {
        type: Array,
        defaul: []
    }
})
</script>

<style scoped lang="stylus">

</style>