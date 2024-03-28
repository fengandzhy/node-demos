const exp = require('express');
const {singers} = require('./singers.json');
const app = exp();

/**
 * 对于直接把参数写在路径上的方式, 就用这种方式来获取. request.params.id
 * */
app.get('/singer/:id.html', (request, response) => {
    const result = singers.find((item) => {
        return item.id === Number(request.params.id);
    });
    response.setHeader('content-type', 'text/html;charset=utf-8');
    response.end(JSON.stringify(result));
});

app.listen(9000, () => {
    console.log('The server is running...');
});