import { defineStore } from "pinia";
import { getProducts, IProduct } from "../service/shop";
import { reactive } from 'vue'

export const useProductsStore = defineStore('products', () => {
    // state: () => {
    //     return {
    //         all: [] as IProduct[]
    //     }
    // },
    // getters: {},
    // actions: {
    //     async loadAllProduct() {

    //     }
    // }
    // let all :IProduct[] = reactive([]);
    let state = reactive({
        all: [] as IProduct[]
    })
    const loadAllProducts = async () => {
        const ret = await getProducts() as IProduct[]
        console.log(ret,'////')
        state.all = ret 
    }
    const decrementProduct = (product: IProduct) => {
        const curProduct = state.all.find(item => item.id === product.id)
        if(curProduct) {
            curProduct.inventory--
        }
    }

    return {
        state,
        loadAllProducts,
        decrementProduct
    }
})