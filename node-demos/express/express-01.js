const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    response.end('Hello, Express');
});

app.listen(9000, () => {
    console.log('The server is start...');
});