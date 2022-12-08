function add(a, b) {
    return a + b;
}
// fn 等待着被优化的函数
// 闭包 函数内部还有函数
function memorize(f,...args) {
    //缓存结果 {} key
    //
    // console.log(fn,args);
    var cache = {
        // key 字符串
        "lu": "抖音"
    };
    // 作用域
    return function(){
        // console.log(Array.prototype.join.call(arguments, ","),'////');
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        console.log(key);
        if (key in cache) { // in json运算符
            console.log('缓存了');
            return cache[key] // 没有运行  f
        } // apply 数组集合，作为f 的参数 call(this,...arguments)
        else {
            console.log('计算了');
            return cache[key] = f.apply(this, arguments);
        }
    }
}
// 函数运行完就销毁
// 函数将会进入到执行栈  创建函数作用域，
// 出栈 ？ 内存的回收  cache 没有了，但却没有 ，cache 被接下来的函数引用着
var memorizedAdd = memorize(add) // 运行时候才会生成闭包函数
let a = (memorizedAdd(1,2)); //运行时可以找到生成时上下文环境中的变量
console.log(a)
memorizedAdd(1,2);