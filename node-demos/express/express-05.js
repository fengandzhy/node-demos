const exp = require('express');

const app = exp();

/**
 * 对于直接把参数写在路径上的方式, 就用这种方式来获取. request.params.id
 * */
app.get('/request', (req, resp) => {
    //1. express 中设置响应的方式兼容 HTTP 模块的方式
    // res.statusCode = 404;
    // res.statusMessage = 'xxx';
    // res.setHeader('abc','xyz');
    // res.write('响应体');
    // res.end('xxx');

    //2. express 的响应方法

    resp.status(200); //设置响应状态码
    resp.set('xxx','yyy');//设置响应头
    resp.send('中文响应不乱码');//设置响应体


    //连贯操作
    resp.status(404).set('xxx','yyy').send('你好朋友')
    //3. 其他响应
    resp.redirect('http://atguigu.com')//重定向
    resp.download('./package.json');//下载响应
    resp.json({
        name: '尚硅谷',
        slogon: '让天下没有难学的技术'
    });//响应 JSON
    resp.sendFile(__dirname + '/home.html') //响应文件内容
});

app.listen(9000, () => {
    console.log('The server is running...');
});