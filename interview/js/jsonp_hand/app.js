const express = require('express')  // 简单的node 服务器开发框架 koa 的爸爸
const app = express()
const cors = require('cors')    // cors 的封装
// node 在所有请求和响应中间加上一个功能 就是中间件
// 从请求到达开始
// 以响应用户结束，发送内容
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     next()
// })
var whitelist = ['http://localhost:5500', 'http://localhost:8888'];
var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
app.use(cors(corsOptions))
app.get('/say', (req, res) => {
    console.log(req.query, '//////')
    let callback = req.query.callback || 'callback'
    let obj = {
        name:'张总',
        spec: '家里有矿'
    }
    // 告诉用户浏览器使用utf8来显示

    res.setHeader('Content-Type', 'text/js;charset=utf8')
    res.end(`${callback}(${JSON.stringify(obj)})`)   // 传递的是字符串
})

app.get('/other', (req, res) => {
    let obj = {
        name:'胡总',
        spec: '家里有坑'
    }
    // 告诉用户浏览器使用utf8来显示

    res.setHeader('Content-Type', 'text/json;charset=utf8')
    res.end(JSON.stringify(obj))   // 传递的是字符串
})
app.listen(3000)
