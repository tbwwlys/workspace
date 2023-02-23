import  { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        name: '胡总字节',
        isAdmin: true
    })
})