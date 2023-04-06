vuex vue-router axios store bootstrap


- proxy 代理    解决跨域问题
    服务器端接口已上线 本地通过proxy 解决跨域问题
    mockjs + online fastmock    按约定的接口文档
    分头开发前  在一起约定接口文档 哪些接口/api
    restful url params qs  json 返回什么
    等前端 后端独立完成的时候联调
    本地的axios baseUrl -> serverUrl
    vite.config.ts 可以帮助我们的前端请求做代理
    nginx 高性能服务器，负载均衡服务器  服务器集群的IP地址和忙闲算法
    代理服务器  :3000 proxy  :80 http 默认端口
    http://localhost -> http://localhost: 80 -> nginx -> http://localhost/3000
    /api/column  -> http://localhost:3000 -> proxy 一下


