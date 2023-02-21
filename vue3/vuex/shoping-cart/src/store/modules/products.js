import shop from '../../api/shop.js'

const state = {
    all: []
}

const mutations = {
    setProducts (state, products) {
        // state.all =
        console.log(products, 'mutations')
        state.all = products;
    },
    decrementProductInventory(state, { id }) {
        const product = state.all.find(product => product.id === id)
        product.inventory--
    }
}

const actions = {
    getAllProducts({ commit }) {
        console.log('action,----------')
        shop.getProducts((products) => {
            // vuex 制定了数据的流程
            commit('setProducts', products)
        })
    }
}

export default {
    namespaced: true, // 模块化的名字 store.products.state
    state,
    mutations,
    actions
}