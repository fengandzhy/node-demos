
/**
 *
 * */
var http = require('http');
var stu = require('./Student');
var teacher = require('./Teacher');
http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){
        console.log(stu);
        var tea = new teacher(1,'a',20);
        tea.enter();
        tea.teach(response);
        response.end('end');
    }
}).listen(8000);
console.log('server is running is at 8000');
