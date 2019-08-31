var http = require('http');
var optfile = require('./modules/optfile');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){ //清除二次访问
        optfile.readFileSync('./views/login.html');//相当于在readfileSync.js下面读取这个文件
        response.end('ok');
    }
}).listen(8000);
console.log('server is running is at 8000');

