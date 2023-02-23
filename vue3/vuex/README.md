- 组件路由数据管理
    跨出层级 跨页面 共享状态 比如login 
    前端工作分成两种
    组件开发 （切页面）
    数据管理（越来越大）从组件本地（没什么状态 computed）抽离到中央


- 项目架构store
- vue 共享状态来到组件的流程
    1. vuex 提供的useStore hook api 拿到store
    2. store.state.count state 是状态对象 读操作
    3. 作为computed 计算属性的返回值，当前的状态
        依赖于store.state.count 订阅了count 
    4. 全局的$store 对象

- vuex 数据流转过程
    1. 本地组件数据状态 data() reactive ref 将收到中央 方便共享和管理
    2. 使用computed 计算属性 + useStore 状态从中央来到地方
    3. 本地不可以直接修改state, store.commit('add')
        提交一个mutations 名字一定要在mutations
- vuex 是什么？
    1. vuex 是一种复杂的设计范式 管理中大型项目的状态（共享状态）
    2. 小项目最好不要用vuex，组件自己管理状态 props+emit
        localStorage ... 共享
    3. 组件基本不在自己管理状态
        action 都在vuex 提供了
        data() reactive ref 很少在组件里用了
    4. store 全局管理状态 
        全家桶之一 vuex/pinia vuex 是现在 pinia 是未来
        - createStore() 单一状态树 只能有一个仓库， 状态（共享）唯一
        - 分成多个模块 modules
            每个modules 都有独立的state mutations actions
        - mutations 只有它可以修改state commit('')
        - actions 数据请求不在发生在组件内部，而是在actions 中
            dispatch 来出发action
    5. vuex 数据流转流程
        - root(Store) -> modules(cart | products) => state(声明) 状态的查找
        - 数据(服务器端) -> api(接口模块 products) -> actions(管理接口请求)
            mutations(commit 唯一修改数据 actions 里调用) -> state(写操作)
            