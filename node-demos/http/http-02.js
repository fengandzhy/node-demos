const http = require('http');

const server = http.createServer((request, response) => {
    // request.method 获取请求的方法
    // console.log(request.method);
    // request.url 获取请求的 url
    // console.log(request.url);// 只包含 url 中的路径与查询字符串
    // request.httpVersion 获取 HTTP 协议的版本号
    // console.log(request.httpVersion);
    // request.headers 获取 HTTP 的请求头

    // 用解构赋值的方法分别得到 request.headers 以及 cache-control
    const {host, 'cache-control': cacheControl} = request.headers;
    console.log(host);
    console.log(cacheControl);
    response.end('end');
});

server.listen(9000, () =>{
    console.log('The server is start...');
});