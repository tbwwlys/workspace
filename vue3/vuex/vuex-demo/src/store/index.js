import { createStore } from 'vuex' // 创建一个状态仓库

// 统一管理好处是  维护成本降低 管理更科学
export default createStore({

    // 组件可以使用它
    state: {
        count: 1 //中央状态
    },
    // 管理规定，状态不能直接修改，修改走一定的流程  会计
    // 变化 突变 要修改必须在mutations，不能随意改
    mutations: {
        // 是在store mutations
        add(state) {    // 第一个参数就是state 对象
            state.count++;  // 只有此处可以修改状态
        }
    }

})