const http = require('http');

//创建服务对象
const server = http.createServer((request, response) => {
    //1. 设置响应状态码
    // response.statusCode = 203;
    // response.statusCode = 404;
    //2. 响应状态的描述
    // response.statusMessage = 'iloveyou';
    //3. 响应头
    // response.setHeader('content-type', 'text/html;charset=utf-8');
    // response.setHeader('Server', 'Node.js');
    // response.setHeader('myHeader', 'test test test'); // 这里是自定义的响应头
    // response.setHeader('test', ['a','b','c']); // 设置多个相同的相应头
    //4. 响应体的设置
    response.write('love');
    response.write('love');
    response.write('love');
    response.write('love');
    response.end('love'); //设置响应体
    response.end('xxx'); //设置响应体
});

//监听端口, 启动服务
server.listen(9000, () => {
    console.log('The server is start...');
});