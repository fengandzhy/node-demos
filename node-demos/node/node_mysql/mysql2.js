var optPool = require('./modules/optPool');

var opool = new optPool();
var pool = opool.getPool();

pool.getConnection(function (err,connection){
    var insertsql = 'insert into user(username,password) values(?,?)';
    var param = ['bbb','abc'];
    connection.query(insertsql,param,function(err,rs){
        if(err){
            console.log('insert err:'+err.message);
            return;
        }
        //console.log(rs);
        console.log('insert success!');
    });

    var selectsql = 'select * from user';
    connection.query(selectsql,function(err,rs,fields){
        if(err){
            console.log('[query]-:'+err);
            return;
        }
        for(var i=0;i<rs.length;i++){
            console.log(rs[i].username);
        }
    });
    connection.release();
});






