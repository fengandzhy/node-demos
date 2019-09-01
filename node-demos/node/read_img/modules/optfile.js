var fs = require('fs');

module.exports ={
    readImg:function(path,response){
        fs.readFile(path,'binary',function(err,file){
            if(err){
                console.log(err);
                return;
            }else{
                console.log('输出文件');
                response.write(file,'binary');
                response.end();
            }
        });
    },
    readfile:function(path,response){
        fs.readFile(path,function(err,data){
            if(err){
                console.log(err);
            }else{
                console.log(data.toString());
                response.write(data);
                response.end();
            }
        });
        console.log("异步方法执行完毕");
    }
}


