import { createStore } from 'vuex'
// 离开组件 设计状态
const state = {
    count: 0, //共享状态
}

const mutations = {
    // 怎么修改它才科学
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--
    }
}
// 提交mutations
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    }

}

const getters = {   //computed
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
// 状态仓库设计好
// 没有去搞modules 模块

// 单一状态树 root 

export default createStore({
    state,
    getters,
    actions,
    mutations
})