/**
 * 文件的追加写入, 每次写入的内容并不覆盖之前的内容.
 * */
const fs = require('fs');

/**
 * fs.writeFile(file, data[, options], callback)
 * file 文件名
 * data 待写入的数据
 * options 选项设置 （可选）
 * callback 写入回调
 *
 * 这是个异步写入过程
 * */
fs.appendFile('./座右铭.txt', '三人行，必有我师矣.', err => {
    if (err) {
        console.log("写入失败.");
        return;
    }
    console.log('写入成功.');
});

console.log('执行到这里了');