# vue现代化
    npm init vite 生产工艺
    现代的 vue项目模板
- vite创建的项目模板 目录架构
    - todos 根目录
    - index.html 挂载点#app 首页
    - src js开发目录
    - main.js 单点入口
    - App.vue 根组件
- vue3的语法变迁
    1. vue3 支持 vue2 的传统命令式语法
        data methods computed 大型项目维护性不好
    2. composition + setup 语法
        vue3 将功能逐个的提供出来，随意组合，开发组件
        import {reactive, ref, computed} from 'vue'
    3. vite 工程化
        .vue后缀文件
        template  模板
        script    js
        style     样式