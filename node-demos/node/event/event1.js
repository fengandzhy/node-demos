var http = require('http');
var userBean = require('./modules/UserBean');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){ //清除二次访问
        var user = new userBean();
        /**
         * 这里面干的事情全部都是在发送‘registerSuccess'事件之后，就是说给这个事件加了个监听器
         * */
        user.eventEmit.once('registerSuccess',function(request){
            response.write('register success');
            response.write('<br/>');
            console.log('username is '+request['username']);
            console.log('pwd is '+request['pwd']);
            user.login(request,response);
            response.end(); //user.login不是异步方法,所以这样写完全没有问题
        }); //事件监听

        user.register(request);

    }
}).listen(8000);
console.log('server is running is at 8000');

