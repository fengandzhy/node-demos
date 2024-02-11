
const fs = require('fs');
const path = require('path');

/**
 * path.resolve() 方法用于将路径或路径片段的序列解析为绝对路径
 * */
console.log(path.resolve(__dirname,'index.html'));
/**
 * 这个表达式中的'/index.html'是一个绝对路径,path.resolve()在遇到这个绝对路径时，
 * 会忽略之前的所有路径（包括__dirname），直接返回'/index.html'作为解析后的绝对路径。
 * */
console.log(path.resolve(__dirname,'/index.html'));

// 会在当前路径下加入index.html变成一个新的绝对路径
console.log(path.resolve('index.html'));


// console.log(__filename); __filename 也是一个全局变量

const fileName = `D:\\github1\\node-demos\\node-demos\\path\\path-01.js`;

/**
 * 它用于解析一个路径字符串，并返回一个对象，该对象包含了路径的不同组成部分
 * */
console.log(path.parse(fileName));

// 获取路径的基础名称
console.log(path.basename(fileName));

// 获取路径的目录名
console.log(path.dirname(fileName));

// 获取文件的扩展名
console.log(path.extname(fileName));


