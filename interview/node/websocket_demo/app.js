const WebSocket = require('ws');    // 基于tcp/ip
// const http = require('http');   // node 内置的
// 在某个端口启动的程序
// ip 身份证 定位服务器 :3000 定位到这台服务器启动的某个进程 -> 某个程序的最小单元
const wss = new WebSocket.Server({
    port: 3000
})
wss.on('connection', (ws) => {
    ws.on('message', () => {
        console.log(message, '//////')
        let msgData = JSON.parse(message)
        wss.clients.forEach(client => {
            client.send(message)
        })
    })
})

