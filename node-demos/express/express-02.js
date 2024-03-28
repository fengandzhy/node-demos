const exp = require('express');

const app = exp();

/**
 * request.url: 这个属性返回请求的URL字符串，它包括路径（path）和查询字符串（query string）。
 * 举例来说，如果请求的URL是 /user/list?name=John&age=30，那么 request.url 的值就是 /user/list?name=John&age=30。
 * 它提供了完整的请求路径和查询字符串，但不包括域名和协议。
 *
 * request.path: 相比之下，这个属性只返回URL的路径部分，不包含查询字符串。
 * 继续上面的例子，如果请求的URL是 /user/list?name=John&age=30，那么 request.path 的值就是 /user/list。
 * 这使得 request.path 在需要处理或匹配请求路径时非常有用，而不用担心URL中可能包含的查询字符串。
 *
 * */
// 创建路由
app.get('/user/list', (request, response) => {

    console.log(request.method);
    console.log(request.url);
    console.log(request.httpVersion);
    console.log(request.headers);

    console.log(request.path); // 请求路径
    console.log(request.query);//获取查询字符串
    console.log(request.get('host')); // 获取指定的请求头

    console.log(request.ip);

    response.end('Hello, Express'); // 如果不写response.end浏览器会一直不停地转
});

app.listen(9000, () =>{
    console.log('The server is running...');
});

