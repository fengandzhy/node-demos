var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'node',
    port:'3306'
});

connection.connect(function (err){
    if(err){
        console.log('[query]-:'+err);
        return;
    }
    console.log('connect succeed!');
});

// var insertsql = 'insert into user(username,password) values(?,?)';
// var param = ['aaa','ass'];
// connection.query(insertsql,param,function(err,rs){
//     if(err){
//         console.log('insert err:'+err.message);
//         return;
//     }
//     console.log(rs);
//     console.log('insert success!');
// });

var selectsql = 'select * from user';
connection.query(selectsql,function(err,rs,fields){
    if(err){
        console.log('[query]-:'+err);
        return;
    }
    console.log(fields);
    for(var i=0;i<rs.length;i++){
        console.log(rs[i].username);
    }
});

connection.end(function (err){
    if(err){
        console.log('[query]-:'+err);
        return;
    }
    console.log('end succeed!');
});
