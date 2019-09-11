var async = require('async');

/**
 * 当这个one发生错误时,这个two的执行结果就不会出来了，除非就是two在one发生错误前就结束
 *
 * */
function exec(){
    async.parallel({
        one:function(done){
            var index =0;
            setInterval(function(){
                console.log('aaa='+new Date());
                index++;
                if(index==6){
                    clearInterval(this);
                    done('a','one finished');
                }
            },1000);
        },
        two:function(done){
            var index =0;
            setInterval(function(){
                console.log('bbb='+new Date());
                index++;
                if(index==3){
                    clearInterval(this);
                    done(null,'two finished');
                }
            },1000);
        }
    },function(err,rs){
        console.log(err);
        console.log(rs);
    });
}
console.log('主程序执行完毕!');
exec();

