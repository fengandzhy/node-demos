/**
 * 文件拷贝
 * */

const fs = require('fs');
const rs = fs.createReadStream('./孙文.jpg');
const ws = fs.createWriteStream('./观书有感.jpg');

rs.on('data', chunk => {
   ws.write(chunk);
});

// 还可以用这种方法把读入流的数据直接写入到写入流中去
// rs.pipe(ws);
