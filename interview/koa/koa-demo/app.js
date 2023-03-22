const Koa = require('koa')
const config = require('./config/default.js')
const app = new Koa()
const path = require('path')
const views = require('koa-views')
// mvc 
const signupRouter = require('./router/signup.js')
const postsRouter = require('./router/posts.js')

// views 在哪里
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(signupRouter.routes())
app.use(postsRouter.routes())

// 如何记录一个请求所花时间
// 第一个计时开始
// app.use(async (ctx, next) => {
//     console.log('中间件');
//     const start = new Date().getTime();
//     await next();
//     const end = new Date().getTime();
//     console.log('请求时间=', end - start, 'ms')
// })

// app.use(async (ctx, next) => {
//     console.log('中间件2');
//     const data = await getData();
//     ctx.body = {data}
//     // ctx.response.body = data
// })
// const getData = async () => {
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, 3000)
//     })
//     return 'Hello World'
// }

app.listen(config.port)

console.log(`listening on port ${config.port}`)