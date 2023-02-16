let ary = [1, [2, [3, [4,5]]], 6]
let str = JSON.stringify(ary); //序列化
// let o = {a: 1,b: 2,c: 3}
// console.log(str)
// console.log(Object.prototype.toString(str))
// let str1 = JSON.parse(str)
// console.log(str1)

// ary = ary.flat(Infinity);   // es6 2015年中提供flat API   兼容性问题
// console.log(ary)
// /  / 正则的格式
    // g 正则修饰符 全局， 不停下来 一直匹配
    // ( ) 分组 匹配各种可能放到这个分组里
    // | 或者 正则是按字符匹配的， [a - z] 匹配一个小写字母
    // [a - z] {3, 5}
    // [ 本身是正则的运算符号 \[转译
    // replace 方法， 正则匹配到的替换成 空
// ary = str.replace(/(\[|\])/g, '').split(',').map(item => item)  
// str = str.replace(/(\[|\])/g, '')    () 在正则中表示 一个或多个 [ ]
// console.log(Object.prototype.toString(str))
// str = '[' + str + ']'
// console.log(Object.prototype.toString(str))
// ary = JSON.parse(str)  //  将其变成数组
// console.log(ary)    
// console.log(Object.prototype.toString(ary))

// 递归
// let result = []
// let fn = function(ary) {
//     for(let i = 0; i< ary.length; i++) {
//         let item = ary[i]
//         if(Array.isArray(ary[i])) {
//             fn(item)
//         } else {
//             result.push(item)
//         }
//     }
// }

//  利用reduce进行与数组相加得到
// function flatten(ary) {
//     return ary.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur)?flatten(cur):cur) //拼接后是数组还是对象
//     }, [])
// }
// console.log(ary)

//将数组展开拼接
while(ary.some(Array.isArray)) {
    ary = [].concat(...ary) 
}
console.log(Array.isArray(ary))
console.log(Object.prototype.toString(ary))