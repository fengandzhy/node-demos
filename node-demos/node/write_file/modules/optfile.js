var fs = require('fs');

module.exports ={
    writeFileAsync:function(path,data,response){
        fs.writeFile(path,data,function(err){
            if(err){
               throw err;
            }
            console.log('It is saved!');
            response.write('Success');
            response.end();
        });
    },

    writeFileAsync1:function(path,data,recall){
        fs.writeFile(path,data,function(err){
            if(err){
                throw err;
            }
            recall('success');
            console.log('It is saved!');
        });
    },
    writeFileSync:function(path,data){
        fs.writeFileSync(path,data);
        console.log('同步写文件完成!');
    }

}


