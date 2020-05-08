var fs = require('fs');

module.exports ={

    //同步读取文件
    readFileSync:function(path){
        var data = fs.readFileSync(path,'utf-8');
        console.log(data);
        console.log('finish reading the fs');
        return data;
    },

    //异步读取文件,读取文件的时候会另起一个线程
    /**
     * 一个函数是否另外开启一个线程，这个好像是js内部决定的
     * */
    readfile:function(path,recall){
        fs.readFile(path,function(err,data){
            if(err){
                console.log(err);
            }else{
                console.log(data.toString());
                recall(data);
                //response.write(data);
            }
        });



        /**
         * 这只是一个普通函数，所以这不会异步执行
         * */
        // test(path,function(){
        //     sleep(5000);
        //     response.write('abcdefg');
        //     console.log('abcdef');
        // });


        console.log("异步方法执行完毕");
    },

    /**
     * 另外一种方法，将response传进去，在这里关闭
     * */
    readfile1:function(path,response){
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

// function test(a,b){
//     sleep(3000);
//     b();
// }
//
function sleep(n) {
    var start = new Date().getTime();
    //  console.log('休眠前：' + start);
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
}