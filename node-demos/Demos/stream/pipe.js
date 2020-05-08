const fs = require('fs');

let ws = fs.createWriteStream('./files/a.txt');
let rs = fs.createReadStream('./readStream.js',{
    highWaterMark:10 //每次读取10个字节
});

rs.pipe(ws);