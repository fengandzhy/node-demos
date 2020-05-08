const fs = require('fs');

/**
 * 这个文件重命名必须要在同一目录下，不能第一个目录是files，第二个目录是files1
 * */
fs.rename('../files/hello1.txt','../files/hello.txt',(err)=>{
    if(err) throw err;
    console.log('rename successfully');
});