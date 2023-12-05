/**
 * 创建文件夹
 * */
const fs = require('fs');

// 如果html 已经存在, 则它会创建失败
// fs.mkdir('./html', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('创建成功.');
// });


// 递归创建文件
fs.mkdir('./a/b/c',{recursive: true}, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('创建成功.');
});

