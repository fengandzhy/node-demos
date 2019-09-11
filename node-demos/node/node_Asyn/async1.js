
function oneFun(){
    var index =0;
    setInterval(function(){
        console.log('aaa='+new Date());
        index++;
        if(index==3){
            clearInterval(this);
        }
    },1000);
    console.log('oneFun finished');
}

function twoFun(){
    var index =0;
    setInterval(function(){
        console.log('bbb='+new Date());
        index++;
        if(index==3){
            clearInterval(this);
        }
    },1000);
    console.log('twoFun finished');
}

oneFun();
twoFun();
console.log('主程序执行完毕');

// var http = require('http');
// http.createServer(function(request,response){
//     response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//     if(request.url!=='/favicon.ico'){ //清除二次访问
//
//     }
// }).listen(8000);
// console.log('server is running is at 8000');

