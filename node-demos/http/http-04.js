const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
    const res = url.parse(request.url, true);
    console.log(res);
    //路径
    const pathname = res.pathname;
    console.log(pathname);
    //查询字符串
    const query = res.query;
    console.log(query);

    const param1 = res.query.param1;
    console.log(param1);

    response.end('end');
});

server.listen(9000, () =>{
    console.log('The server is start...');
});