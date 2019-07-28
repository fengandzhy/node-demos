var http = require('http');
var url = require('url');
var optfile = require('./modules/optfile');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){ //清除二次访问
        optfile.readfile('./views/login.html',response);
        response.end();
        console.log('主程序执行完毕');
    }
}).listen(8000);
console.log('server is running is at 8000');