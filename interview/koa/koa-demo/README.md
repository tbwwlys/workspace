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
    PC 一套 nuxt
    mobile SPA

- 静态资源koa处理
    - css js image 
        - 不归路由管
        - 前端写的大部分都是静态资源    webpack/vite 打包 dist/
            未来会单独放在cdn 服务器    前端缓存
    - 单独处理静态资源路由
    - http://localhost:3000/index.css
        静态服务器 static 缓存 cache 
        - / 动态服务器路由，首页
        - / 静态服务器  静态服务器中间件放在路由前面
    - 时间内，客户端不用再请求，http 优化的重要理解
        200 第一次
        2... 304 Not modified
        maxAge 一定会去服务器再次请求

- 登录的用户体验
    - keyup 事件 enter 提交
    - 做好校验
        前端做了（用户体验，及时提醒），后端也要做(js可以被禁用，后端不信任前端传的任何东西)，为了数据安全
        密码重复 在前端，后端都要做 优先后端，后端对数据安全付第一责任
- 文件对象是html5的重大功能
    - 提供了file对象
        文件在上传到服务器之前，就可以访问到本地文件 类型 大小
    - 提供了FileReader 对象
        异步的读取硬盘内容到内存，以url，base64 blob
        让我们看到图片，上传
        文件大小 比较大 用户要等好久才能上传完，如果没有交互体现正在上传的话，用户比较焦虑

- bodyParser 中间件 
    post 请求和 get 请求不一样
    GET 查询参数 在请求行 就已到位
    POST 请求体，(请求头信息有length)分段传输   路由中间件之前要加 请求体数据包收集中间件 
    bodyParser  await 收集 === length next()

- node 做后端
    优点是 异步 与其他后端语言不一样的  性能好 no blocking
    一台服务器上限同时在线5000人，并发 nginx/tomcat
    php/java/python 同步的 blocking 在sql请求(I/O)耗时任务中占据线程
    node 异步的， 有event loop 在sql请求(I/O)耗时任务中进入event loop
    nginx / tomcat 线程就会被释放 不会阻塞   no blocking
    省掉很多服务器，支持高并发
    java c++ 多线程 
    node 单线程 跟法师一样脆 服务器会崩 所有用户都不响应 try catch
    pm2进程管理工具
    
- 上传文件
    1. 上传到服务器端
        哪个文件夹？ static-catch 静态服务器，缓存
        /public/images
    2. 可以访问的
        静态服务器
    3.fs模块写入其中

- mysql 业务处理方式
    1. MVC 的model层
        lib/mysql.js简版
        在控制层中调用
    2. 数据库驱动   mysql2 翻译
        驱动数据库  为程序工作I/O
        createPool
        getConnection 链接数据库
        release  断开数据库
    3. 封装了通用的query 方法 sql data 
    4. 提供了各种业务 sql 封装函数
        - 检测users 表是否有用户 select count(*)
        - 插入一条数据 insert into