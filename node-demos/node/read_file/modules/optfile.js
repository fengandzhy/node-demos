var fs = require('fs');

module.exports ={
    readFileSync:function(path){
        var data = fs.readFileSync(path,'utf-8');
        //debugger;
        console.log(data);
        console.log('finish reading the file');
        return data;
    },
    readfile:function(path,response){
        // fs.readFile(path,function(err,data){
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log(data.toString());
        //         //response.write(data);
        //     }
        // });
        test(path,function(){
            sleep(5000);
            console.log('abcdef');
        });
        // response.write("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        console.log("异步方法执行完毕");
    }
}

function test(a,b){
    sleep(3000);
    b();
}

function sleep(n) {
    var start = new Date().getTime();
    //  console.log('休眠前：' + start);
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
}
