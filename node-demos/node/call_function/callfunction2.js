var http = require('http');
var other = require('./modules/otherfuns');
http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){
        other.fun2(response);
        response.end();
    }
}).listen(8000)
console.log('server is running is at 8000');

