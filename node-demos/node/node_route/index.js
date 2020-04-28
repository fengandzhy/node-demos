var http = require('http');
var url = require('url');
var fs = require('fs');

var host = '127.0.0.1';
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){ //清除二次访问
        var pathname = url.parse(request.url).pathname;
        console.log(pathname);
        switch (pathname) {
            case '/index':
                showPage('./views/index.html',200,response);
                break;
            case '/about':
                showPage('./views/about.html',200,response);
                break;
            default:
                showPage('./views/404.html',200,response);
                break;
        }

    }
}).listen(8000);
console.log('server is running is at 8000');
function showPage(path,status,response){
    fs.readFile(path,function(err,data){
        if(err){
            console.log(err);
            return;
        }
        response.write(data);
        response.end();
    });
}