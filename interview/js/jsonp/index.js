let express = require('express')

let app = express() // 后端应用app
// 添加路由
// HTTP 是一个简单的协议，基于TCP/IP 基于请求响应
// 使用上网代理，（浏览器）输入地址 http://localhost；3000/say
// 请求行 GET http://localhost:3000/say
// 请求头COOKIE Authorization

let whiteList = ['http://127.0.0.1:5500']
// 后端放水
app.use((req, res, next) => {
    let origin = req.headers.origin
    console.log(origin, '!!!!!')
    if(whiteList.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin)
        // Restful 一切皆资源
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST')
        res.setHeader('Access-Control-Allow-Cridentials', true)
    }
    // 哪些跨域请求通过 Origin 不太了解  * 所有都通过
    
    console.log('~~~~~~~~~~~~~')
    next()
})  // 中间件

app.get('/say',function(req, res) {
    let jsonData = {
        name: '蔡总帅',
        favor: ['喝酒', '泡吧']
    }
    // res.writeHead(200, 'ok', {
    //     'Content-Type': 'text/json;charset=utf-8',
    //     'Set-Cookie': 'name=12;age12;'
    // })
    res.setHeader('Content-Type','text/json;charset=utf-8')
    // res.end('hello, say')
    res.send(JSON.stringify(jsonData))
})

app.listen(3000) 