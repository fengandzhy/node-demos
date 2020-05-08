const fs = require('fs');
const chokidar = require('chokidar');
/**
 * 监听文件，但是会打印多次
 * */
// fs.watch('../files',{recursive:true},(eventType,filename)=>{
//     console.log(eventType,filename);
// });
chokidar.watch('../files',{ignored:'./node_modules'}).on('all',(event,path)=>{
    console.log(event,path);
});











