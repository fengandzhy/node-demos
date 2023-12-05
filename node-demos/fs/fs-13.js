
/**
 * 递归创建文件夹
 * */
const fs = require('fs');

fs.mkdir('./a/b/c',{recursive: true}, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('创建成功.');
});

// 同步方式
// fs.mkdirSync('./a/b/c', {recursive: true});