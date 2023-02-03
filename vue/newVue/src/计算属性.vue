<script>
export default{
    data() {
        return {
            message: "我是最帅的",
            age: 4
        }
    },
    computed:{
        // 简写
        // reverseMsg: function() {
        //     return this.message.split('').reverse().join('');
        // }
        // get 和 set 方法
        reverseMsg: {
            get: function() {
                return this.message.split('').reverse().join('');
            }
        }
    },
    methods: {
        hello() {
            console.log("你好")
            return this.message = "你好"
        }
    },
}
</script>
<template>
    <div>
        <h1 @click="hello">{{message}}</h1>
        <h2>{{ reverseMsg }}</h2>
        <!-- 使用methods中的方法需要加() -->
        <!-- <h3>{{ hello() }}</h3> -->
        <h4 @click="hello">hello</h4>
    </div>
</template>
<style>

</style>