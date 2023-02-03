// let arr = [1,2,3,4,5]
// let arr2 = [1,,3]
// const a = function(b) {
//     // b[10] = 11
//     // console.log(b.length)
//     // b.length = 3
//     // console.log(b)
//     // delete(b[2])
//     // console.log(b)
//     console.log(b.length)
// }
// a(arr2)
// var f = function () { console.log('1'); } 
// function f() { console.log('2'); }
// f()
let arr = [1,2,4,4,5,5,6]
const deduplication = function (input) {
    const n = input.length;
    if(n === 0) {
      return 0;
    }
    let i = 1;
    let newArr = input[0]
    while( i < n) { 
      if(input[i] !== input[i - 1]) {
        newArr[i] = input[i]
      }
    }
    return newArr;
};
console.log(deduplication(arr))
