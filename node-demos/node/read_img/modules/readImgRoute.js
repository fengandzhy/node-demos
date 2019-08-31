
var optfile = require('./optfile');
module.exports={
    readImg:function(request,response){
        optfile.readImg('./imgs/pig.png',response);
    }
}