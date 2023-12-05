/**
 * 读取文件夹
 * */
const fs = require('fs');

// 异步读取当前文件夹
fs.readdir('./', (err, data) => {
    if(err){
        console.log(err);
        throw err;
    }
    console.log(data);
});

// 同步读取当前文件夹
const data = fs.readdirSync('./');
console.log(data);
