const http = require('http');
const url = require('url');

/**
 * 提取请求中的路径和查询字符串
 * */
const server = http.createServer((request, response) => {
    let url = new URL(request.url, 'http://127.0.0.1'); // 通过这种方式补齐完整的url http://localhost:9000/url?param1=1&param2=2

    const pathname = url.pathname;
    console.log(pathname);

    const params = {};
    url.searchParams.forEach((value,key) => {
        params[key] = value;
    });
    console.log(params);


    response.end('end');
});

server.listen(9000, () =>{
    console.log('The server is start...');
});