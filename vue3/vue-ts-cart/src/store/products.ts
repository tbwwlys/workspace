import { defineStore } from "pinia";
import { ref, Ref } from 'vue'

const apiUrl = 'https://fakestoreapi.com'
export type Product = {
    id: number
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export const useProductStore = defineStore('products', () => {
    const all: Ref<Product[]>  = ref([])
    const ids: Ref<number[]> = ref([])
    const loaded = ():boolean => {
        return all.value.length > 0
    }
    const fetchAll = async () => {
        if(loaded()) { // 如果有不重复加载
            return 
        }
        const res = await fetch(`${apiUrl}/products`)   // 发送了请求
        const data:Product[] = await res.json()
        all.value = data
        ids.value = data.map(product => {   // 参数类型
            return product.id   
        })
    }
    return {
        all,
        ids,
        loaded,
        fetchAll
    }
})