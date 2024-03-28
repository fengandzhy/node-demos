const express = require('express');
const app = express();
const path = require('path');

/**
 * 使用express.urlencoded中间件来解析URL编码的请求体
 * { extended: true } 选项允许解析复杂的对象结构
 * */
app.use(express.urlencoded({ extended: true }));

/**
 * 使用express.json中间件来解析JSON格式的请求体
 * */
app.use(express.json());

app.get('/home',(request, response) => {
    response.sendFile(path.join(__dirname, 'public','index.html'));
});

app.post('/login',(request, response) => {
    response.send(request.body);
});

app.listen(9000, () => {
    console.log('The server is running...');
});