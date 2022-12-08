var add = function(a, b, c) {
    return a + b + c
  }
// memorize 高阶函数
// memorize 内部生成了闭包函数，并且return 给 memorizedAdd
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
        // console.log(key);
        if (key in cache) { // in json运算符
            // console.log('缓存了');
            return cache[key] // 没有运行  f
        } // apply 数组集合，作为f 的参数 call(this,...arguments)
        else {
            // console.log('计算了');
            return cache[key] = f.apply(this, arguments);
        }
    }
}
var memoizedAdd = memorize(add)

console.time('use memorize') // 计时开始
for(var i = 0; i < 100000; i++) {
    // memoizedAdd(1, 2, 3)
    add(1,2,3)
}
console.timeEnd('use memorize')