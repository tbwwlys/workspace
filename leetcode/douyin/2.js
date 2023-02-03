// let  str= 'aljdflo;;...//kajFFFFfffFGGHSFHGSJ;PERJIOFLWJRFGOLoajid'
// var palindrome = function(str) {
//     str = str.toLowerCase().replace(/[\W_]/g,'')
//     const reverStr = str.split('').reverse().join('')
//     return reverStr === str
// }

// console.log(palindrome(str))
// let arr = [1,2,3,4,5]
// let arr1 = arr.reverse().join('')
// console.log(arr, arr1)
// let x = 121
// var isPalindrome = function(x) {
//     x = x + ''
//     let x1 = x.split('').reverse().join('')
    
//     // console.log(x, x1)
//     // console.log(typeof x)
//     console.log(x1, typeof (x1))
//     return x === x1
// }
// console.log(isPalindrome(x))
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// let arr = [1,2,3]
// function isTraversal() {
//     for(let key in obj) {
//         console.log(key)
//         console.log(obj[key])
//     }
//     for(let value of Object.keys(obj)) {
//         console.log(value)
//         console.log(obj[value])
           
//     }
//     for(let key in arr) {
//         console.log(key)
//         console.log(arr[key])
//     }
//     for(let value of arr) {
//         console.log(value)
//     }
// }
// isTraversal()
let arr = [1,2,3]
function isArr() {
    console.log(arr.push(4)) 
    console.log(arr)
    console.log(arr.pop())
    console.log(arr.unshift(5))
    // console.log(arr.shift())
    console.log(arr)
}
isArr();