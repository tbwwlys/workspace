const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    // console.log(req.url)
    if(req.url === '/') {
        // 首页html index.html
        fs.readFile('./index.html', 'utf-8', (err, data) => {
            if(err) {
                res.end('出错了')
                return
            }
            // console.log(data)
            res.end(data)
        })
        // res.end('hello world')
        fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res)
    }
    let abs = path.join(__dirname, req.url)
    // 文件或目录的信息
    fs.stat(abs, (err, stat) => {
        if(err) {
            res.statusCode = 404
            res.end('not found')
            return
        }
        // linux 文件和文件夹都是fs 一样的，区别是头信息 是否是文件
        if(stat.isFile()) {
            // fs.setHeader('Expires', new Date(Date.now() + 200000).toGMTString())
            res.setHeader('Cache-Control', 'max-age=20')
            fs.createReadStream(abs).pipe(res)
        }
    })
    // console.log(abs)
})

server.listen(3000)