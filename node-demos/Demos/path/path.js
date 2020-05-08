const path = require('path');

//console.log(path);

console.log(path.basename('abc/def/index.js')); //abc/def/index.js 这个路径其实就是一个字符串
console.log(path.dirname('abc/def/index.js')); //文件夹名或者说上级目录地址
console.log(path.extname('abc/def/index.js')); // 文件的扩展名


console.log(path.join('abc/def/','/index.js')); // 合并成 一个路径
console.log(path.normalize('abc/def//index.js')); // 规范化路径
console.log(path.resolve('abc/def/index.js')); // 得到这个的绝对路径

console.log(path.sep); // 得到这个的绝对路径

console.log(__dirname);

console.log(__filename);