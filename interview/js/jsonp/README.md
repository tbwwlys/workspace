- json with padding

- 跨域问题
    1. 以后 服务器端脚本
        api.baidu.com/say   后端接口域名
        www.baidu.com   前端域名
        ？ 跨域了
        跨域不只是跨domain 域名 cross origin = domain + port + http
        url  https://domain.com: 8888/path?a=1#b
        只要协议 域名 端口 有一个不一样就叫跨域 严格
    安全
        双方
        前端 不信任后端返回的资源
        后端 No Access
    跨域是常态
        前后端分离是主流    8888 3000
        大公司的协作
            api.baidu.com
            ai.baidu.com

- 浏览器会自动进行CORS通信
    实现CORS的关键是 后端
    只要后端实现了CORS 就实现了跨域
    服务器设置了Access-Control-Allow-Origin *   后端
    白名单和黑名单
- 什么是同源策略和限制内容
    同源策略是一种约定  是浏览器最核心也是最基本的安全功能
    如果没有，浏览器很容易受到xss，CSRF攻击
    js 不能执行 非同源的代码

    - COOKIE localstorage Origin 沙箱隔离
