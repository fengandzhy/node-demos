const fs = require('fs');

let ws = fs.createWriteStream('./files/a.txt');
let count = 0;
let timer = setInterval(()=>{
    if(count < 10){
        ws.write(count+'');
        count++;
    }else{
        ws.end('');
        clearInterval(timer);
    }
},1000);

ws.on('finish',()=>{
    console.log('finish!');
})