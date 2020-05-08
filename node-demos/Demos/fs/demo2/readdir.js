const fs = require('fs');

/**
 * 如果是一个不存在的文件夹会报错
 * */
fs.readdir('../files1/files2',(err,files)=>{
    if(err) throw err;
    console.log(files);//返回一个数组

});



