var http = require('http');
var router = require('./modules/exceptionroute');
var url = require('url');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){ //清除二次访问
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,'');
        try{
            router[pathname](request,response);
        }catch(err){
            console.log(err);
            response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            response.write(err.toString());
            response.end();
        }
        console.log('Server 执行完毕');
    }
}).listen(8000);
console.log('server is running is at 8000');


