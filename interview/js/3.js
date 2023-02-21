// 手写Map
// thisArg 指定 callbackFn 内部的this 指向
let newMap = Array.prototype.map = function(callbackFn, thisArg) {
    //this -> [1,2,3]
    //obj
    // Array.prototype.map.call(undefined) 
    if(this === null || this === undefined) {
        throw new TypeError('cannot read property map of null or undefined')
    } 
    if(typeof callbackFn != 'function') {    // Object.prototype.toString.call(callbackFn) != '[object Funtion]'
        throw new TypeError(callbackFn + 'is not a function')
    }
    // 显示类型转换 this 对象
    let O = Object(this)    //把调用它的数组转换成 object
    // console.log(typeof this)
    // console.log(typeof O)
    let T = thisArg;
    let len = O.length;
    let A = new Array(len); //跟以前的数组没有影响，全新的内存分配
    for (let k = 0; k < len; k++) {
        // this[k] 遍历的每一项
        // 下标
        // this 第三个参数
        if(k in O) {
            let KValue = O[k] // 每一项 
            let IdentifierValue = callbackFn.call(T, KValue, k, O)
            A[k] = IdentifierValue
        }
    }
    console.log(A)
    return A;
}

let nums = [1,2,3]
let obj = {
    val: '值' 
}
let newNums = nums.newMap(function(item, index, array) {
    return item + index + array[index] + this.val;
}, obj)
console.log(newNums)