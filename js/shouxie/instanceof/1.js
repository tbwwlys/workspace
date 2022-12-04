// 构造函数
function Person(name, age) {
    // 构造
    // 基于原型的封装
    this.name = name;
    this.age = age;

}
Person.prototype.sayHi = function (){
    console.log(`你好，${this.name}`)
}
const aTao = new Person('涛总', 18);
console.log(aTao instanceof Person);
console.log(aTao instanceof Object);
