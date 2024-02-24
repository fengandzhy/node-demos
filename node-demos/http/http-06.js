const http = require('http');
/**
 * http://localhost:9000/login?username=aa 对于这个地址来说, 这里的pathname 永远只是 /login这一部分
 * */
const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;charset=utf-8');
    console.log(request.url); // 这永远都是 /login 端口后面，参数前面的部分
    const url = new URL(request.url,'http://127.0.0.1'); // 这是个对象
    const {pathname} = url;

    if(pathname == '/login'){
        response.end('登录页面');
        return;
    }
    if(pathname == '/register'){
        response.end('注册页面');
        return;
    }
    response.end('其他页面');
});

server.listen(9000, () =>{
    console.log('The server is start...');
});