/**
 * 读取文件夹
 * */
const fs = require('fs');

// 异步读取当前文件夹
fs.readdir('./', (err, data) => {
    if(err) throw err;
    console.log(data);
});
