const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8');
    /**
     * response.end() 是 HTTP 服务器响应 (http.ServerResponse) 对象的一个方法，用于结束响应过程，即向客户端发送响应并关闭响应流。
     * */
    response.end('Hello World.');
});

server.listen(9000, () =>{
    console.log('The server is start...');
});