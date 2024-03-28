const exp = require('express');

const app = exp();

// 创建路由
app.get('/user/list', (request, response) => {

    console.log(request.query);//获取查询字符串
    console.log(request.get('host')); // 获取指定的请求头

    response.end('Hello, Express'); // 如果不写response.end浏览器会一直不停地转
});

app.listen(9000, () =>{
    console.log('The server is running...');
});

