const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) =>{
    const url = new URL(request.url, 'http://127.0.0.1');
    const {pathname} = url;
    const filePath = __dirname + '/page' + pathname;
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