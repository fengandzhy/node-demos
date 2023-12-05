/**
 * 同步追加写入文件
 * */
const fs = require('fs');

fs.appendFileSync('./data.txt', '我来了');

console.log('执行到这里了.');