var fs = require('fs');

var writeStream = fs.createWriteStream('input.txt');

var data = '狗日的中国！';

writeStream.write(data,'UTF-8');

writeStream.end();

//写入完成时触发
writeStream.on('finish',function(){
    console.log('finish writing');
});

writeStream.on('error',function(err){
    console.log(err.stack);
});


