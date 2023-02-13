function sum(a, b) {
    let args = [...arguments]
    // let args = Array.from(arguments)
    // 借用数组的slice 方法
//     let args = Array.prototype.slice.call(arguments)
    console.log(Array.prototype.toString.call(args))
//     console.log(Array.prototype.toString.call(arguments))
//     console.log(Array.prototype.toString.call(arguments, args))
}
sum(1, 2)