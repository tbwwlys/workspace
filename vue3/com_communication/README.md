- 组件通信必考题


- 组件树
    App.vue #root 挂载点
    父子组件    props + emit 父组件负责数据通信和管理
    兄弟组件
    跨层级组件  爷孙
    页面级别组件    router-view 地址unmount mount 全局
    localStorage pinia vuex
    没有任何关系但要共享状态
    没有任何关系但要共享状态的组件


- vue2.0 类式组件   老项目
    setup() vue3.0 composition api  过渡阶段
    setup 语法糖 完全抛弃类式组件   全新 统一编程风格

- props 父组件 传值给 子组件
- emit  子组件 传值给 父组件
- expose