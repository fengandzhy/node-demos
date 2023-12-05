/**
 * 同步追加写入文件
 * */
const fs = require('fs');

// \r\n表示换行
fs.appendFileSync('./data.txt', '\r\n我来了');

console.log('执行到这里了.');