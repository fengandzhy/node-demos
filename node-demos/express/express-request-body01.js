const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

/**
 * 使用express.urlencoded中间件来解析URL编码的请求体
 * { extended: true } 选项允许解析复杂的对象结构
 * */
app.use(express.urlencoded({ extended: true }));

//解析 JSON 格式的请求体的中间件
// const jsonParser = bodyParser.json()

//解析 querystring 格式请求体的中间件
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * 使用express.json中间件来解析JSON格式的请求体
 * */
app.use(express.json());

//response.sendFile 响应文件内容
app.get('/home',(request, response) => {
    response.sendFile(path.join(__dirname, 'public','index.html'));
});

app.post('/login',urlencodedParser,(request, response) => {
    response.send(request.body);
});

app.listen(9000, () => {
    console.log('The server is running...');
});