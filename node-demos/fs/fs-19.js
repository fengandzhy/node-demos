/**
 * 关于相对路径的一个坑
 * */

const fs = require('fs');
/**
 * 这里的相对路径有这样的一个坑, ./data.txt 这个表示相对于命令行的所在路径, 例如 命令行在这里运行 D:\github1\node-demos\node-demos\fs>
 * 它就是fs 下的 data.txt, 如果命令行是这样  D:\github1 它就是 github1下面的 data.txt, 它不是本js 文件的所在路径, 它是运行命令时的所在路径
 * */
// fs.writeFileSync('./data.txt', '我来了');

/**
 * __dirname 与 require 类似，都是 Node.js 环境中的'全局'变量
 * __dirname 保存着 当前文件所在目录的绝对路径 ，可以使用 __dirname 与文件名拼接成绝对路径代码示例
 * */
console.log(__dirname);

fs.writeFileSync(__dirname+'/data.txt', '我来了');