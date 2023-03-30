# vue3 + ts
- vue3 以前对typescript 类型系统支持不是很友好
    vue3 框架本身是用typescript 写的
    vue3 借鉴了react 的hooks 函数式编程setup + composition API 抛弃了落后的类式组件
    proxy 响应式代理 vue2 defineProperty
    react 单向数据流 vue 双向 v-model
    vue有指令 语法更优雅 react 门槛较高
    MVVM 

- vue3 + ts 注意的地方
    - 项目架构会有types 目录 类型的申明， 多半为 数据接口
    - alias vite.config.ts + tsconfig.json
        path @types/node
        @types/vue-router
    - reactive 对象 ts 的重点
        <{}>