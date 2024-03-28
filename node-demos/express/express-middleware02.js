const exp = require('express');
const app = exp();



const routeMiddleWare = (request, response, next) =>{
    if(request.query.code === '521'){
        next();
    }else{
       response.send('号码错误');
    }
}

// 路由中间健写在这里
app.get('/home',routeMiddleWare,  (request, response) => {
    response.send('网站首页');
});

app.get('/admin',routeMiddleWare, (request, response) => {
    response.send('管理首页');
});

app.listen(9000, () => {
    console.log('The server is running...');
});