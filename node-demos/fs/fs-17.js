/**
 * 查看资源的状态
 * */
const fs = require('fs');

fs.stat('./孙文.jpg', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.birthtime);
    console.log(data.isFile());
    console.log(data.isDirectory());
});





