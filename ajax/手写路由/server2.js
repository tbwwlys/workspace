/* //1. 引入express npm install express
const express = require('express');
//2. 创建应用对象
const app = express();
//3. 创建路由规则
app.get('/server1',(request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello Ajax')
})
//4. 设置监听器，监听端口
app.listen('8000', () => {
    console.log("服务已启动，端口8000监听中。。。。");
})
 */
// 1. 引入express
const express = require('express');
// 2. 创建应用对象
const app = express();
// 3. 设置路由规则
app.get('/server2', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应体
    response.send('Hello Ajax');
});
// 4. 监听器
app.listen(8000, () => {
    console.log("服务已启动，端口8000监听中");
});