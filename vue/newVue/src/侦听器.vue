<script>
export default{
    data() {
        return {
            message: "我是最帅的",
            age: 23,
            user: {
                name: "张三",
                age: 3
            }
        }
    },
    methods: {

    },
    watch: {
        // 每当这个数据发生改变就会执行这个函数，通过一个数据去影响多个数据
        // message: function(newValue, oldValue) {
        //     console.log(newValue + oldValue)
        //     if(newValue.length < 5) {
        //         console.log("输入框中的内容不能小于五")
        //     } else if (newValue.length > 10){
        //         console.length("输入框中的内容不能大于十")
        //     }
        // }
        message: {
            immediate: true, // 初始化的时候就使用
            handler: function(newv) {
                console.log(newv);
                if(newv.length > 4) {
                    console.log("不能大于5")
                }
            }
        },
        "user.name": {
            handler: function(newValue) {
                console.log(newValue)
            },
            // deep:true,  //表示深度侦听一层一层往下给每一个属性都加上侦听器
        }
    }
}
</script>
<template>
    <div>
        <h1>{{ message }}</h1>
        <button @click="message= '你好'">改变message</button>
        <!-- 数据的双向绑定 -->
        <input type="text" v-model="message"/>
        <h1 >{{ user.name }}今年{{ age }}岁</h1>
        <button @click="user.name = '李四'">改变成李四</button>
    </div>
</template>
<style>

</style>