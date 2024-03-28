//导入 express
const express = require('express');

//创建应用对象
const app = express();

//静态资源中间件设置
app.use(express.static(__dirname + '/public'));


//监听端口, 启动服务
app.listen(9000, () => {
    console.log('The server is running...');
});