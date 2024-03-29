//导入 express
const express = require('express');

//创建应用对象
const app = express();


/**
 * 访问 index.html的时候，它的referer是空, 但是 当它解析到 index.html 里面的 <img src="http://127.0.0.1:9000/images/logo.png" alt="">
 * 它再次发送了请求, 此时的请求就带有了referer, 在这里就被拦截了下来，不能让它走到 app.use(express.static(__dirname + '/public')); 否则
 * 图片就显示出来了
 * */
app.use((req,res,next) =>{
    const referer = req.get('referer');
    if(referer){
        const url = new URL(referer);
        const hostname = url.hostname;
        if(hostname !== 'localhost'){
            res.status(404).send('<h1>Not found</h1>');
            return;
        }
    }
    next();
});

/**
 * 这里就直接访问静态资源index.html,
 * */
//静态资源中间件设置
app.use(express.static(__dirname + '/public'));



//监听端口, 启动服务
app.listen(9000, () => {
    console.log('The server is running...');
});