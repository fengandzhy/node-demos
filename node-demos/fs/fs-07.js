/**
 * 同步文件读取
 * */
const fs = require('fs');
const data = fs.readFileSync('./观书有感.txt');
console.log(data.toString());

