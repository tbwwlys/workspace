# vue 商城开发
- 简历需要
- 完整的vue 全家桶  
    npm i
        lib-flexible    
        vue-router@next 
        vant    有赞 适合 移动商城组件库
- 组件库
    router element3 element-plus vant
    按需加载
    css库文件
- css 准备工作
    - reset.css
    - 移动应用
        rem 适配 html fontsize  动态    1rem = 设计稿多少？ 750px   1rem = 75px
        Mobile First  80%
        PC  工作 管理   后台

- 页面重置
        reset
    - html fontsize rem 自适应    确定页面整体的字体大小    import 'lib-flexible/flexible'
- 架构 目录的意义
    vite 工程化 项目模板
    - src 开发目录
        - assets    静态资源目录
            css image
            main.css base.css 

- vue-router 
    - redirect 
        没有直接给浏览器响应
        给浏览器发送一个跳转指令
        再次发出请求？/home
- main.js 入口文件，有哪些工作


- assets 
    - main.css 
        /* css @import 引入 css 模块化 */
        @import "./base.css";
        #app {
            font-weight: normal;
        }
    - 图标字体库
        iconfont
        引入第三方 <link rel="stylesheet" href="https://at.alicdn.com/t/font_1623819_3g3arzgtlmk.css">
    - base.css
        *,
        *::before,
        *::after {
            box-sizing: border-box;   /* 盒模型的计算方式 IE盒模型 移动端 更利于布局*/
            margin: 0;
            position: relative;
            font-weight: normal;
        }
- views     页面级别组件

- stylus    
    css 全新写法，写起来更快，很多高级功能
    - npm i stylus
        安装stylus  css 预编译器
        全新写法来写css，stylus，帮我们来自动编译css
