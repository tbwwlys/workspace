var propValue = function(obj) {
    return obj.value;
}
propValue({value:1});

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
// propvValue({value:1});
var memoizedAdd = memorize(propValue)

console.log(memoizedAdd({value: 1})) // 1
console.log(memoizedAdd({value: 2})) // 1





var memorize = function(func, hasher) {
    var memoize = function(key) {
        console.log(key)
        // cache
        var cache = memoize.cache;
        //key ?
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    // 把cache 挂载在函数对象上
    memoize.cache = {};
    return memoize;
};

// var memoizedAdd = memorize(propValue, JSON.stringify)
var memoizedAdd = memorize(add, function(){
    var args = Array.prototype.slice.call(arguments)
    return JSON.stringify(args)
})


console.log(memoizedAdd({value: 1}))
console.log(memoizedAdd(1,2,3))
console.log(memoizedAdd(1,2,4))

