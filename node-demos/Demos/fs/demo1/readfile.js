const fs = require('fs');

fs.readFile('../files/hello.txt',(err,data)=>{
    if(err) throw err;
    //console.log(data); //这里的data实际上是一个buffer
    console.log(data.toString());
});

console.log('********************************');

//这里如果加了utf8就不用在后面加一个data.toString()
fs.readFile('../files/hello.txt','utf8',(err,data)=>{
    if(err) throw err;
    //console.log(data); //这里的data实际上是一个buffer
    console.log(data);
});

