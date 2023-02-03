let arr = [1,3,5]
let obj = {
    name: "张新禧",
    age: 23
}
// console.log(typeof arr)
// for(let key in arr) {
//     console.log(key)
//     console.log(arr[key])
// }
// for(let o in obj) {
//     console.log(o)  // o 为属性名
//     console.log(obj.o)  // 在 for in中无法使用obj.o调用出属性值 输出为 undefined
//     console.log(this.obj.o) // 错误代码
// }
for(let key of arr) {
    console.log(key)    // key 为数组的值
    console.log(arr[key])   // 错误代码
}
for(let o of obj) { // 对象没发在 for of中迭代 TypeError: obj is not iterable
    console.log(o)
    // console.log(obj.o)
}
