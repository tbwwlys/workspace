// function sayHello(person: string):string {
//     return `Hello, ${person}`
// }

// sayHello('atao')

// const message: string = sayHello('atao')
let pc: string | number | boolean;
pc = 'one'
pc = 2
pc = true
// let fibonacci: Array<number>= [1, 1, 2, 3, 5]
// let fibonacci: number[]= [1, 1, '2', 3, 5]
interface NumberArray {
    [index: number]: number | string
}
let fibonacci: NumberArray= [1, 1, '2', 3, 5] 