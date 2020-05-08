const fs = require('fs');

let count =0;

let rs = fs.createReadStream('./readStream.js',{
    highWaterMark:10 //每次读取10个字节
});

rs.on('data',chunk=>{
    console.log(chunk.toString());
    console.log(count++);
});

rs.on('end',()=>{
    console.log('end!');
});

