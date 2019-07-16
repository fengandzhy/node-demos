var http = require('http');
var user = require('./User');
http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){

        response.end();
    }
});