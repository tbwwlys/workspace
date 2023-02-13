- 类数组
    有length 属性可以遍历但是不具备数组很多方法的子类型 
        如 arguments NoteList
    有length属性    可以遍历 的对象类型，不是真正的数组
    对象的子类型
    - 举例类数组
        arguments 函数的内置对象    this
        Array.isArray(document.querySelectorAll('div')) false

        Object.prototype.toString.call(document.querySelectorAll('div'))    '[object NodeList]'
    - es6设计箭函数的原因？
        1. this增加了代码的复杂性对其他语言的开发者不友好
        2. es6 设计的指导原则 简洁又优雅
            NodeList    div html js runtime Node 对象
            map html 字符串数组  .join('')  
            - 遍历一下 {} push []
            - 切割slice
            - Array.from  
            - 展开运算符   [...arguments]
            - concat + apply
                concat 返回值是数组
        2. 如何理解reduce ？
            1. es6  map 外最高频数组考点
            2. for of  或技术循环太机械 命令式编程
            3. map reduce filter every some 函数式编程
                useReducer()    reduce 把多个数组合并成一个
                ((pre, cur) => {
                    return pre + cur    数组相加 也可以相减
                },0)
- JS判断数组包含某个值 ？
    蹦出api来是不友好的，
    - indexOf 
        返回元素在数组中第一次出现的下标，否则为1
    - includes
        数组中是否存在某个值，boolean
    - find reduce map
        find 找到