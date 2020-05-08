const fs = require('fs');


fs.stat('../files/hello.txt',(err,status)=>{
    if(err) throw err;
    console.log(status);
    console.log(status.isFile());
    console.log(status.isDirectory());
});