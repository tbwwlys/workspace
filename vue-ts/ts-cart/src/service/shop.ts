// 如何提升数据的完整性
// const num:Number = 1112
// 接口 接头
// js 为何没有？弱类型
// vscode 用 ts写的
export interface IProduct {
    id: number;
    title: string;
    price: number;
    inventory: number;
}
const wait = (delay:number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    }) 
}

const _products :IProduct[] = [
    {id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2},
    {id: 2, title: 'H&M T-shirt White', price: 500, inventory: 10},
    {id: 3, title: 'Charli XCX -Sucker CD', price: 59.9, inventory: 16}
]

export const getProducts = async () => {
    // 延迟加载
    await wait(1000)
    return _products
    
}

export const buyProducts = async () => {
    await wait(1000) 
    return Math.random() > 0.5
}