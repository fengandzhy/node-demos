/**
 * 异步文件读取
 * */
const fs = require('fs');
fs.readFile('./观书有感.txt', (err, data) => {
    if (err) {
        console.log('读取错误');
        return;
    }
    console.log(data.toString());
});


