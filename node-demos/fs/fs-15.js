/**
 * 递归删除文件夹
 * */
const fs = require('fs');

// 异步递归删除文件夹, 这里只需要传入最上层的文件夹即可
fs.rm('./a', {recursive: true}, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('删除成功.');
});

// 同步递归删除文件夹
// fs.rmSync('./a', {recursive: true});

