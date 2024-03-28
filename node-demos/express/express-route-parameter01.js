const exp = require('express');

const app = exp();

/**
 * 对于直接把参数写在路径上的方式, 就用这种方式来获取. request.params.id
 *
 * :id/:base 就是一个路由参数
 *
 * */
app.get('/user/list/:id/:base', (request, response) => {
    console.log(request.params.id);
    console.log(request.params.base);
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end('商品详情');
});

app.listen(9000, () =>{
    console.log('The server is running...');
});