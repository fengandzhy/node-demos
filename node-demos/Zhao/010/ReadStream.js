var fs = require('fs');

var readStream = fs.createReadStream('file.txt');

var data = '';

readStream.setEncoding('UTF-8');

//当有数据可读时触发
readStream.on('data',function(chunk){
    data+=chunk;
});

//没有更多的数据可读时触发
readStream.on('end',function(){
    console.log('Read fs is finished!');
    console.log(data.toString());
});

//在接收和写入过程中发生错误时触发
readStream.on('error',function (err) {
    console.log(err);
});

console.log('程序执行完毕！');



