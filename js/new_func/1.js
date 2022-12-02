var stuA = {
    name: "蔡总",

};
var stuB = {
    name: "刘总"
};
function sayHi (...args) {
    console.log(...args)
    console.log(`你好，我是${this.name}`)
}
// stuA 和 stuB 都能 sayHi
sayHi.call(stuA);
// Object.prototype.sayHi = sayHi;
// stuB.sayHi();
// sayHi.apply(stuA);
var func = sayHi.bind(stuB);
func();
sayHi.call(stuA,1,2);

sayHi.apply(stuB,[1,2]);