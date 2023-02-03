<script>
export default {
    data() {
        return {
            message: "helloworld",
            isActive: true,
            notActive: false
        }
    },

}
</script>
<template>
<div>
    <!-- 可以与类名同时使用 -->
    <h1 :class="{active:isActive, notactive: notActive}" class="active">我是最帅的</h1>
    <button @click="isActive=false,notActive=true">改变颜色</button>
</div>
</template>
<style>
.active {
    color: red;
}
.notactive {
    color: green;
}
</style>


