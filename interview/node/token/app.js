const Koa = require('koa');// node 里的框架 npm i koa commonjs 模块
const router = require('koa-router')();
const app = new Koa();  // 服务器端应用
const path = require('path') //node 内置模块
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken')
// 挂在模板引擎
app.use(views(
    // 模板位置和引擎
    path.join(__dirname, './views'),{
        extension: 'ejs'    // 模板引擎的种类
    }
))
app.use(bodyParser())
router.get('/user', async (ctx) => {
        id: payload
    await ctx.render('user')
})
router.get('/profile', async (ctx) => {
    const auth = ctx.request.headers['authorization'];
    console.log(auth)   // token
    const payload = jwt.verify(auth, 'zxx')  // id: 1
    ctx.body = {
        id: payload
    }
})
// 后端的登录界面   传统的web 网站开发
router.get('/login', async (ctx) => {
    // 伺服状态，怎么响应用户请求
    // response 
    // ctx 相当于前端的this 本次服务的上下文环境对象 = response + request
    const title = 'hello koa2'
    // 页面的渲染 传统的 MVC View Controller
    await ctx.render('index', {
        title
    })
    // 前后端分离
    // ctx.body = {
    //     msg: 'hello, login',
    // } 
})

router.post('/login', async(ctx) => {
    const { name, pwd } = ctx.request.body
    console.log(name, pwd, '////')
    // 解析请求体 ctx.request.headers
    // 颁发token 现在登录的核心
    const token = jwt.sign({
        id: 1
    }, 'zxx',{
        expiresIn: 6000
    })
    if(name === 'admin' && pwd === '123456') {
        // 数据库查出来的userId = 1
        // json 数据 cookie 的数据丰富
        // 钥匙,只在服务端生成和校验
        // cookie

        ctx.body = {
            statusCode: 200,
            token
        }
    } else {
        ctx.body = {
            statusCode: 505,
            token: '用户名或密码错误'
        }
    }
   
})
app
    .use(router.routes())   // vue路由的数组
    .use(router.allowedMethods())

app.listen(8080,() => {
    console.log('server is running 8080')
})

