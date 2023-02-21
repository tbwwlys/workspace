// 手写map
const newMap = Array.prototype.map = function(callbackFn, obj) {
    if(this === null || this === undefined) {
        throw new TypeError('cannot read, property map of null or undefined')
    }
    if(typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + 'is not a function')
    }
    let O = Object(this)
    let len = O.length;
    let T = obj;
    let A = new Array(len)
    for(let k = 0; k < len; k++) {
        if(k in O) {
            let kValue = O[k];
            let IdentifierValue = callbackFn.call(T, kValue, k, O)
            A[k] = IdentifierValue;
        }
    }
    return A;
}
let nums = [1, 3, 5]
let obj = {
    name: 'zxx',
    age: 18
}
// let newNums = nums.newMap(function(value, index, array) {
//     return value + obj.age + obj.name;
// },obj)
console.log(typeof newMap)
console.log()
// console.log(newNums)