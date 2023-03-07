- 后端api 怎么搞
   - mockjs
      随代码 方便管理 维护
   - fastmock 在线
      易用
   - json-server?
      初学
   - 第三方开源接口
      git clone 上班第一句代码
      比如 netseacloudmusic
   - node + mysql
      全栈
   - 

- 后端音乐接口在 http://localhost:3000
- 前端vue 单页应用SPA http://localhost:3000
   domain -> ip -> 定位服务器
   端口 对应一个应用 -> 进程

- npm i @types/node 
   node 类型声明文件
   - vite.config.ts ts 配置文件   alias
      import { resolve } from 'path'
      resolve: {
         alias: {
            '@': resolve(__dirname, "src")
         }
      }
   - tsconfig.json
      paths: {
         "@/*": [
            "src/*"
         ]
      }
- 多级路由配置
   当如果在页面上还需要开辟子内容区域时，
   children + Tab

- css 准备工作
   1. 安装stylus  npm i stylus
      预编译css 超集 变量 嵌套 混合等
      .styl 先编译 css 再 运行
      vite 会自动编译 比 webpack 牛逼
   2. reset    
   3. variable minxin 的全局引入
   4. iconfont