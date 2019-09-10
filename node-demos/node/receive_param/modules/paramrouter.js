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
                console.log('收到参数',post['email']+'\n');
                console.log('收到参数',post['pwd']+'\n');
                optfile.readfile('./views/success.html',getRecall(response));
            });
        },
        page:function(request,response){
            optfile.readfile('./views/login.html',getRecall(response));
        }
    }
}
