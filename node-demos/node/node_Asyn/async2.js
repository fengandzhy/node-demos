var async = require('async');

function exec(){
    async.series({
        one:function(done){
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

