/**
 * 文件的删除
 * */
const fs = require('fs');

fs.unlink('./观书有感.gif', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('删除成功.');
});


