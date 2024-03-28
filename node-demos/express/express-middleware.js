const exp = require('express');
const fs = require('fs');
const path = require('path');
const app = exp();


/**
 * 在Express框架中，"中间件"（Middleware）是一个非常核心的概念，指的是一种函数，
 * 它可以访问请求对象（req）、响应对象（res）、以及应用程序的请求/响应循环中的下一个中间件函数。
 * 中间件的主要功能包括执行任何代码、修改请求和响应对象、终结请求-响应循环、调用堆栈中的下一个中间件。
 * 如果中间件函数不结束请求-响应循环，它必须调用next()方法将控制权传递给下一个中间件，否则请求将被挂起。
 * */
const middleWare = (request, response, next) =>{
    let {url, ip} = request;
    fs.appendFileSync(path.resolve(__dirname , './access.log'), `${url}  ${ip}\r\n`);
    next();
}

app.use(middleWare); // 全局中间健在这里写

app.get('/home', (request, response) => {
    response.send('网站首页');
});

app.get('/admin', (request, response) => {
    response.send('管理首页');
});

app.listen(9000, () => {
    console.log('The server is running...');
});