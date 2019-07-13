var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){ //清除二次访问
        console.log('visit');
        response.write('hello world!');
        response.end(); //不写这个请求将无法结束,表现为就是不停地在刷
    }
}).listen(8000);
console.log('server is running is at 8000');

