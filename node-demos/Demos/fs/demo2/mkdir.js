const fs = require('fs');
const path = require("path");

/**
 * 如果是已经存在的文件夹它会报错
 *
 * */
// fs.mkdir('../files1',err=>{
//     if(err) throw err;
//     console.log('mkdir successfully');
// });



// fs.mkdir('../files1/files2',{recursive:true},err=>{
//     if(err) throw err;
//     console.log('mkdir successfully');
// });

function mkdirs(dirname,callback){
    fs.exists(dirname, exists=>{
        if(exists){
            callback();
        }else{
            mkdirs(path.dirname(dirname),()=>{
                fs.mkdir(dirname,callback);
            });
        }
    })

}

mkdirs('../files1/files2', function(err){
    if (err) throw err;
});

//console.log(path.dirname('../files1/files2/files3'));