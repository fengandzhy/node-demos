/**
 * 删除文件夹
 * */
const fs = require('fs');

// 异步删除文件夹, 被删除的文件夹必须存在
fs.rmdir('./html', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('删除成功.');
});

// 同步删除文件夹
// fs.rmdirSync('./html');
