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
    }
}


