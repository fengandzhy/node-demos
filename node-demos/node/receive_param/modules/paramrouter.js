var url = require('url');
var optfile = require('./optfile');
function getRecall(response){
    return function recall(data){
        response.write(data);
        response.end();
    }
}

module.exports={
    // login:function(request,response){
    //     var rdata = url.parse(request.url,true).query;
    //     console.log(rdata);
    //     if(rdata['email']!=undefined){
    //         console.log(rdata['email']);
    //     }
    //     optfile.readfile('./views/login.html',getRecall(response));
    // },

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
    }
}
