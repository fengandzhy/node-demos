const fs = require('fs');
const buf = Buffer.from('\nHello Sam');

fs.appendFile('../files/hello.txt',buf,err=>{
   if(err) throw err;
   console.log('append successfully');
});