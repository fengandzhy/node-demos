
/**
 * node 有两种调用函数的方法，一种是调用本模块的函数，另外一种是调用其他模块里的函数
 * */
var http = require('http');
http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){
        fun1(response);
        response.end();
    }
}).listen(8000)
console.log('server is running is at 8000');

function fun1(res){
    console.log('fun1');
    res.write('this is fun1');
}
