/**
 * 文件移动和重命名
 * */
const fs = require('fs');

// rename 实现文件的重命名和移动, 如果源文件和目标文件的路径一致，则表现为是重命名, 如果不一致则表现为是移动
fs.rename('./观书有感.jpg', './观书有感.gif', err => {
    if (err) {
        console.log(err);
    }
});

