const exp = require('express');
const fs = require('fs');
const path = require('path');
const app = exp();


const middleWare = (request, response, next) =>{
    let {url, ip} = request;
    fs.appendFileSync(path.resolve(__dirname , './access.log'), `${url}  ${ip}\r\n`);
    next();
}

app.use(middleWare);

app.get('/home', (request, response) => {
    response.send('网站首页');
});

app.get('/admin', (request, response) => {
    response.send('管理首页');
});

app.listen(9000, () => {
    console.log('The server is running...');
});