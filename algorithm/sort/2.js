// 内存分配 简单数据类型放在栈内存 复杂数据类型放在堆内存

let x = 1;
let y = 2;
let c = x;
    c = 5;
let o = {name: '羽羽'};
let b = o; //对象引用
b.name = '飞飞';
console.log(o.name); // 不是值的拷贝，是引用
let z;
z = x;
x = y;
y = z;
