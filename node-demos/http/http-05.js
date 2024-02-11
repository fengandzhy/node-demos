const http = require('http');
const url = require('url');

/**
 * 提取请求中的路径和查询字符串
 * */
const server = http.createServer((request, response) => {
    let url = new URL(request.url, 'http://127.0.0.1');

    const pathname = url.pathname;
    console.log(pathname);
    response.end('end');
});

server.listen(9000, () =>{
    console.log('The server is start...');
});