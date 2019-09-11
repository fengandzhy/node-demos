var async = require('async');


/**
 * 这里的pre是前一个函数的执行结果也就是'one finished'
 * 当前一个done出现错误时，将不会执行后面的函数,
 * 它跟这个async.series的区别就是，它会把前一个结果传给后面的函数
 * */
function exec(){
    async.waterfall([
        function(done){
            var index =0;
            setInterval(function(){
                console.log('aaa='+new Date());
                index++;
                if(index==3){
                    clearInterval(this);
                    done(null,'one finished');
                }
            },1000);
        },
        function(pre,done){
            var index =0;
            setInterval(function(){
                console.log('bbb='+new Date());
                index++;
                if(index==3){
                    clearInterval(this);
                    done(null,pre+' two finished');
                }
            },1000);
        },
        function(pre,done){
            var index =0;
            setInterval(function(){
                console.log('ccc='+new Date());
                index++;
                if(index==3){
                    clearInterval(this);
                    done(null,pre+' three finished');
                }
            },1000);
        }
    ],function(err,rs){
        console.log(err);
        console.log(rs);
    });
}
console.log('主程序执行完毕!');
exec();

