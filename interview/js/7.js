// 手写 shallow 浅拷贝
const shallowClone = (target) => {
    // 排除 null typeof object
    if(typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isAarry(target) ? [] : {} //新的空间
        // object array for in 遍历 性能不如计数循环
        for(let prop in target) {
            if(target.hasOwnProperty(prop)) {   // 自己的， 不是原型链上的
                cloneTarget[prop] = target[prop] // 拷贝
            }
        }
        return cloneTarget
    } else {
        // null 或简单数据类型
        return target;
    }
}