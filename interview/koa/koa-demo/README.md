- KOA 极简的node 开发框架
    - context = req + res

# 后端思维
    MVVM MVC
    view html 有 完整的html  + DOM (原生的js jQuery)
- 3000  后端
    后端安全的一部分？
    配置化
- 洋葱模型
    它是koa 提供服务和架构的本质， node 服务器的简单
    123456
    - 每个函数交给app.use 调用的都是中间件 middleware
    - 每个middleware中都能拿到 ctx next 等参数
    - 按照顺序执行 从上到下
    - 如果遇到ctx.response.body 提前退出
        不同的用户不同的请求  不同的中间件请求
        数组 数据库链接中间件 肯定要在路由中间件前面
    - 如果到了最后的一个中间件 仍然没有结束，他会沿着洋葱模型回溯执行

- MVC
    - Model 数据层
    - View 视图层
    - Control 控制层 负责通信，逻辑 参数的校验 中间过程的计算 用户的session
    - 路由 后端路由，用户从哪条路进来，哪个method进来， 交给control

- koa 路由
    1. app.js 单点路口 模块化
    2. routers 目录 定义路由
        使用restful-api  名词+动词
        /posts GET POST DELETE PATCH PUT
    3. 路由是作为中间件 启用
        ctx.req 请求行 http 版本号 url method
        多个路由中间件
        如果url method 和当前洋葱模型执行顺序里的路由中间件匹配， 进入控制器函数执行
        不匹配呢？ next  
    4. render 渲染一个模板

- koa view层
    1. 传统的MVC
        经典的后端架构方案和设计模式
        router -> controller -> views
    2. ctx.render()
        ctx 代表上下文环境 req+ res
        省略 response 
        ctx.render = ctx.response.render
    3. views 目录和view 层
        signup.ejs 模板引擎
    4. 使用ejs 模板引擎
        {{}} <%= %>
        for
        模板编译后 + 完整的输出给浏览器
        前后端分离 只有一个挂载点 vue
        components 动态
        - MVVM 大型项目， 大公司团队合作
            前后端分离 更适合 应用打开更快，体验好，不用白一下
        - 前后端分离缺点是啥？
            SEO 极其差 #root 百度不会解析js ajax 数据 
        - koa-views views 中间件 挂载到app上
            - 配置 views 所在
                ctx.render 指定模板的名字
            - 指定 模板引擎 ejs pug
                <%= %>
            - 洋葱模型顺序  views 中间件 功能准备型中间件 防置在路由中间件前面
        - PC 端路口在百度
        - 移动端在应用市场MVVM
- meta viewport 
    head 里 meta 通常用来丰富页面的信息和属性
    description
    keywords 
    viewport 用于手机适配 电脑端不用
    移动端 init-scale=1.0 width=device-width (user-scalable=no 手指缩放页面,现在过时了,由于缩放会误操作)
    乔布斯开创了移动时代,pc更多
