const fs = require('fs');

/**
 * 写入时会把原来的内容覆盖掉.
 * 另外，写入时如果文件不存在,会自动创建一个文件,但如果文件夹不存在,则会报错
 */

fs.writeFile('../files1/hello.txt','hello world',err=>{
   if(err) throw err;
   console.log('write successfully1');
});

/**
 * 同时运行第一第二个程序，往一个文件里写入内容，这个写入的内容是不一定的
 * */
// fs.writeFile('../files/hello.txt','hello world222222','base64',err=>{
//     if(err) throw err;
//     console.log('write successfully2');
// });


