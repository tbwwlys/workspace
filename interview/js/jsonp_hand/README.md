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