# 同学列表
- 前后端分离
    table
    后端？

    GET HTTP Method
    /student
    返回json 数据

- npm init -y 项目变成一个后端项目
    npm i json-server
    package.json dev: "json-server --watch student.json"
    npm run dev
- http 请求分为 GET  和 POST form表单的动作
    GET 表示获取列表 
    POST 表示添加新数据
    fetch(url,{
        method: 'post',
        body: JSON.stringify(student),// 请求体
        headers: {
            'Content-Type': 'application/json'
        }                      
    })