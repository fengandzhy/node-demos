const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('content-type', 'text/html;chartset=utf-8');
    response.end('Hello World.');
});

server.listen(9000, () =>{
    console.log('The server is start...');
});