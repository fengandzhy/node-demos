
var optfile = require('./optfile');
module.exports={
    write:function(request,response){
        optfile.writeFileAsync('./files/one.txt','content',response);
    },
    write1:function(request,response){
        function recall(data){
            response.write(data);
            response.end();
        }
        optfile.writeFileAsync1('./files/one.txt','content1',recall);
    }
}