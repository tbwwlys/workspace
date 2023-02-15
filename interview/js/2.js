let nums = [1,2,3]
let obj = {val: 5}
//原数组不会受影响
// 命令式 到函数
// 参数有三个，按需使用 第三个参数是数组本身
let newNums = nums.map(function(item, index, array) {
    // 没有返回值   默认就是undefind
    // obj 被认为是 this的值
    return item + index + array[index] + this.val;
}, obj)
console.log(newNums)