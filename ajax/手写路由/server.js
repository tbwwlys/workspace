/* //1.引入express
const express = require('express');
//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO AJAX');

});
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中。。。");
})
 */
//1. 引入express
const express = require('express');
//2. 创建应用对象
const app = express();
//3. 创建路由规则
// request是请求报文的封装
// response 是响应报文的封装
app.get('/server',(request, response) => {
    // 设置响应头允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLOW AJAX');
});
app.listen(8000,() => {
    console.log("服务已启动，8000端口监听中。。。");
})