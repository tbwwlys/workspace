const fs = require('fs')

// fs.readFile('./content/hello.txt',(err, data) => {
//     if(err) throw err;
//     console.log(data.toString())
// }) 

//Promise 形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./content/hello.tx', (err, data) => {
        if(err) reject(err);
        resolve(data)
    })
})

p.then(value => {
    console.log(value.toString())
}, reason => {
    console.log(reason)
})