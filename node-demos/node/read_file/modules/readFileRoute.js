
var optfile = require('./optfile');
module.exports={
    login:function(request,response){
        optfile.readfile1('./views/login.html',response);
    },

    register:function(request,response){
        optfile.readfile1('./views/register.html',response);
    }
}