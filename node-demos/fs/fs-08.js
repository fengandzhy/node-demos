/**
 * 流式读取文件
 * */
const fs = require('fs');

// 读取到文件流
const rs = fs.createReadStream('./孙文.jpg');

// 必须绑定data事件, 才能取到所读数据
rs.on('data', chunk => {
    console.log(chunk.length);
});

rs.on('end', () => {
    console.log('读取完毕.');
});
