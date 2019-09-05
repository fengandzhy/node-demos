var fs = require('fs');

module.exports ={

    //同步读取文件
    readFileSync:function(path){
        var data = fs.readFileSync(path,'utf-8');
        console.log(data);
        console.log('finish reading the file');
        return data;
    },

    /**
     * 异步程序处出现的异常要在异步程序这里try catch 主程序里是无法捕获异步线程处的异常
     * */
    readfile:function(path,recall){
        fs.readFile(path,function(err,data){
            if(err){
                console.log(err);
                recall('file not exists!');
            }else{
                console.log(data.toString());
                recall(data);
                //response.write(data);
            }
        });
        console.log("异步方法执行完毕");
    }
}


