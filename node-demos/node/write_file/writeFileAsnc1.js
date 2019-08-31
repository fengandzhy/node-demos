var http = require('http');
var url = require('url');
var router = require('./modules/writeFileRoute');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){ //清除二次访问
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,'');
        console.log(pathname);
        router[pathname](request,response);
    }
}).listen(8000);
console.log('server is running is at 8000');