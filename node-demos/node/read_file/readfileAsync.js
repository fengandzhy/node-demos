var http = require('http');
var optfile = require('./modules/optfile');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){ //清除二次访问
        optfile.readfile('./views/login.html',recall);
        function recall(data){
            response.write(data);
            response.end();
        }
        console.log('主程序执行完毕');
    }
}).listen(8000);
console.log('server is running is at 8000');