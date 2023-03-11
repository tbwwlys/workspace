-loader 的重要概念
    - 在webpack entry 到 output 中间
        modul 匹配到每个规则
        再使用相应的loader去处理的过程
        
- hash?
    根据文件内容进行计算，会得到一个唯一值  留下打包历史
    为了防止浏览器的缓存资源浪费  CleanWebpackPlugin 清空一下
    
- --mode=
    development 开发阶段    
    production 上线阶段 代码压缩    http 传输 越小越好

- vite 完胜 webpack 
    更快    启动快 重新编译快
    vite 使用了GO 代替了node 编译
    webpack 生态成熟  


- babel 是什么？
    js 的编译器 正是因为babel es6+ 才能大胆使用起来
    @babel/core babel 的核心库
    @babel/cli 命令行
    @babel/preset-env   预处理方式 preset   env 按照你的当前的环境来编译
    

