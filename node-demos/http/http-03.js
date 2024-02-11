const http = require('http');

/**
 * 用data 和 end 事件来得到 请求体
 * Get 请求的请求体一般为空, 需要用post 请求
 * */
const server = http.createServer((request, response) => {
    let body = '';
    request.on('data', chunk => {
        body += chunk;
    });
    request.on('end', () => {
        console.log(body);
        response.end('end');
    });

});

server.listen(9000, () =>{
    console.log('The server is start...');
});