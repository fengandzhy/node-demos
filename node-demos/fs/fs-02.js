/**
 * 同步写入文件
 * */
const fs = require('fs');

fs.writeFileSync('./data.txt', '我来了');

console.log('执行到这里了.');