var fs = require('fs');
var zlib=require('zlib');

var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('output.txt.gz');
var gzStream = readStream.pipe(zlib.createGzip());
gzStream.pipe(writeStream);

console.log('执行完毕！');



