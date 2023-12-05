/**
 * 文件拷贝
 * */

const fs = require('fs');
const rs = fs.createReadStream('./孙文.jpg');
const ws = fs.createWriteStream('./观书有感.jpg');

rs.on('data', chunk => {
   ws.write(chunk);
});


