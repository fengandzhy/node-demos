const exp = require('express');
const app = exp();

/**
 * http://localhost:9000/index.html 可以直接访问到 public 下面的 index.html.
 * 由于index.html是默认的路径, 所以 http://localhost:9000 也可以直接访问
 * */
app.use(exp.static('./public')); // 静态资源中间健

app.get('/home',(request, response) => {
    response.send('网站首页');
});

app.get('/admin',(request, response) => {
    response.send('管理首页');
});

app.listen(9000, () => {
    console.log('The server is running...');
});