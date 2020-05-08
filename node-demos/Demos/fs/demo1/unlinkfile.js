const fs = require('fs');


fs.unlink('../files/hello.txt',(err)=>{
    if(err) throw err;
    console.log('remove successfully');
});