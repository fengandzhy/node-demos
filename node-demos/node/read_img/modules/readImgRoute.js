
var optfile = require('./optfile');
module.exports={
    login:function(request,response){
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        optfile.readfile('./views/showimg.html',response);
    },
    readImg:function(request,response){
        response.writeHead(200,{'Content-Type':'image/jpeg'});
        optfile.readImg('./imgs/pig.png',response);
    }
}