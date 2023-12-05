/**
 * 文件的写入
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
fs.writeFile('./座右铭.txt', '三人行，必有我师矣.', err => {
    if (err) {
        console.log("写入失败.");
        return;
    }
    console.log('写入成功.');
});

console.log('执行到这里了');

/**
 * 对于这里加上配置项 {flag:'a'} 也能实现文件的追加写入, 注意这里只能是 {flag: 'a'}, 不能是别的值, 不能是别的属性
 * */
fs.writeFile('./座右铭.txt', '三人行，必有我师矣.',{flag:'a'}, err => {
    if (err) {
        console.log("写入失败.");
        return;
    }
    console.log('写入成功.');
});