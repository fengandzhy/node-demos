var url = require('url');
var optfile = require('./optfile');
var querystring = require('querystring');
function getRecall(response){
    return function recall(data){
        response.write(data);
        response.end();
    }
}

module.exports={
    login:{
        success:function(request,response){
            optfile.readfile('./views/success.html',getRecall(response));
        },
        page:function(request,response){
            var rdata = url.parse(request.url,true).query;
            console.log(rdata);
            if(rdata['email']!=undefined){
                console.log(rdata['email']);
            }
            optfile.readfile('./views/login.html',getRecall(response));
        }
    },

    postLogin:{
        success:function(request,response){
            var post = '';

            request.on('data', function(chunk){
                post += chunk;
            });
            request.on('end',function(chunk){
                post = querystring.parse(post);
                var arr = ['email','pwd'];
                var re = function(data){
                    var dataStr = data.toString();
                    for(var i=0;i<arr.length;i++){
                        var regularExpression = new RegExp('{'+arr[i]+'}','g');//g表示全局匹配
                        dataStr = dataStr.replace(regularExpression,post[arr[i]])
                    }
                    response.write(dataStr);
                    response.end();
                }
                optfile.readfile('./views/success.html',re);
            });
        },
        page:function(request,response){
            optfile.readfile('./views/login.html',getRecall(response));
        }
    }
}
