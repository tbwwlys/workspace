- 跨域
    后端处理
    1. Access-Control-Allow-Origin
        cors Ajax 同源策略
        res.header('Access-Control-Allow-Origin', '*')
    2. 不受同源机制的script 标签
            <script src="外网地址"></script>
            img
            link ...
            链接外界的静态资源的
- CORS Policy
    cross origin resource share 跨域资源共享
    cors 方案适用于比较保守的跨域解决方案
    公司内部或友商

- script 门户开放型
    开放给全网用的  github api douban api
    origin  起始在用户浏览器端  
    1. script 可以请求跨域资源 不受同源策略的影响
        前提是返回js
    2. 提前埋好callback 回调函数
        返回的js会执行

        json 资源 外面包一个函数,成为js函数调用