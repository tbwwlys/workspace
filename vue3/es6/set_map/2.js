// let name = new Set();
// name.add("张新禧");
// name.add("是")
// name.add("最帅的")
// console.log(name)
const dog = new Map();
dog.set('小白', 3)
dog.set('小黑', 4)
dog.set({mz: "小红"}, 2)
dog.forEach((val, key) => {
    console.log(val, key)
})
for([key, val] of dog) {
    console.log(key, val)
}
