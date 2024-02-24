const http = require('http');
const fs = require('fs');

/**
 * http://127.0.0.1:9000/index.html 浏览器访问的是这个地址,
 * 然后 filePath 就会从这个地址去找 D:\github1\node-demos\node-demos\http\static-resource/page/index.html
 * */
const server = http.createServer((request, response) =>{
    const url = new URL(request.url, 'http://127.0.0.1');
    const {pathname} = url;
    const filePath = __dirname + '/page' + pathname;
    console.log(filePath);
    fs.readFile(filePath, (err, data) =>{
        if(err){
            response.statusCode = 500;
            response.end('file read failed!');
            return;
        }
        response.end(data);
    });

});

server.listen(9000, () =>{
    console.log('The server is start and listening at 9000');
});