- 手写 vue-router 怎么搞
    1. vue-router ？ 类 模块
        import {
            createRouter,
            createWebHashHistory
        } from 'vue-router'
        createRouter 方法 options 
        createWebHashHistory 事件的监听 hashChange
    
    2. 匹配的组件
        如何放到router-view里面 slot

- app.use(router) 
    1. router ? 
        vue 生态的代表 vue-router vuex Element-plus vant
        vue 只负责响应式和组件化等核心能力，其他交给周边生态
        嫁接入口 vue 主动去调用install 方法
    2. install 
        声明router-link router-view 两个全局组件

- <component :is="component"/>
    组件占位
    动态绑定

- 组件通信的API
    app.provide(KEY, component) 跨组件共享 全局对象 useRouter() useStore() 
    inject(KEY) 使用这个全局对象

- 响应式的底层逻辑
    订阅发布者模式
    当我们使用到ref/ reactive 绑定的值后 router-view router.current.value 匹配routes 组件
    真正的意思是订阅了 current 这个值
    current.value 在hashchange 发生后，改变了，发不出去
    所有的订阅者都会得到这个消息，自动更新



