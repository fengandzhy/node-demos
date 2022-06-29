var http = require('http');

http.createServer((request,response) => {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url !=='/favicon.io'){
        console.log('request', request);
        response.write('Hello World!');
        response.end();
    }
}).listen(3000);
console.log('Server is running...');