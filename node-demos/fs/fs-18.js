/**
 * 关于绝对路径的
 * */
const fs = require('fs');

// 这里的 斜杠/ 表示当前盘符的绝对根路径
fs.writeFileSync('/index.html','aa');
