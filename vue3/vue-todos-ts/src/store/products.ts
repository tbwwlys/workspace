import { reactive, ref, Ref } from 'vue'
import { defineStore } from 'pinia'

type Product = {
    id: number,
    title: string,
    price: boolean,
    description: string,
    category: string,
    image: string 
}

export const useProductsStore = defineStore('products',() => {
    const all:Ref<Product[]> = ref([])
    // actions
    const fetchAll = async () => {
        const res = await fetch(`https://fakestoreapi.com/products`)
        const data: Product[] = await res.json()
        all.value = data
    }
    return {
        all
    }

})