let express = require('express')

let app = express() // 后端应用app
// 添加路由
// HTTP 是一个简单的协议，基于TCP/IP 基于请求响应
// 使用上网代理，（浏览器）输入地址 http://localhost；3000/say
// 请求行 GET http://localhost:3000/say
// 请求头COOKIE Authorization


app.get('/say',function(req, res) {
    let jsonData = {
        name: '蔡总帅',
        favor: ['喝酒', '泡吧']
    }
    // res.end('hello, say')
    res.send(JSON.stringify(jsonData))
})

app.listen(3000)