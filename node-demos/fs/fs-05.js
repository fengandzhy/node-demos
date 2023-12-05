/**
 * 流式写入文件
 * 程序打开一个文件是需要消耗资源的 ，流式写入可以减少打开关闭文件的次数。
 * 流式写入方式适用于 大文件写入或者频繁写入 的场景, writeFile 适合于 写入频率较低的场景
 *
 * */
const fs = require('fs');


// \r\n表示换行
const ws = fs.createWriteStream('./观书有感.txt');

ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');

ws.close();