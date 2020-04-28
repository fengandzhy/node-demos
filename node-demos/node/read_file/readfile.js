var fs = require('fs');
fs.readFile('./views/content.txt',function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log("异步读取："+data.toString());
});
var data = fs.readFileSync('./views/content.txt');
console.log("同步读取："+data.toString());
console.log('end');


