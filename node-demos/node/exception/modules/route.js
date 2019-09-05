var optfile = require('./optfile');
function getRecall(response){
    return function recall(data){
        response.write(data);
        response.end();
    }
}
module.exports={
    login:function(request,response){
        optfile.readfile('./views/login1.html',getRecall(response));
    },

    register:function(request,response){
        optfile.readfile('./views/register.html',getRecall(response));
    }
}
