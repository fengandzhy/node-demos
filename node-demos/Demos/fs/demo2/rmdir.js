const fs = require('fs');

/**
 * 这里只能删除一个空文件夹，对于非空文件夹无法删除(不加recursive:true 的时候)
 * recursive:true 的时候可以递归删除 但只有10以上的版本才有效
 * */
fs.rmdir('../files1',{recursive:true},err=>{
    if(err) throw err;
    console.log('remove directory success');
});

/**
 * node JS 递归删除文件
 * */
function removeDir(dirname,callback){
    console.log("removing "+dirname);
    fs.readdir(dirname,(err,files)=>{
        if(err) callback(err,dirname);
        if(files.length == 0){
            fs.rmdir(dirname,err=>{
                callback(err,dirname);
            });
            return;
        }

        files.forEach(function (file){

            console.log('processing '+file);
            fs.stat(dirname+'/'+file,(err,status)=>{
                if(err){
                    console.log("error in "+dirname+'/'+file);
                    callback(err,dirname+'/'+file)
                }
                if(status.isDirectory()){
                    removeDir(dirname+'/'+file,(err,filename)=>{
                        if(err){
                            callback(err,filename);
                        }
                        fs.readdir(dirname,(err,files)=>{
                            if(err) callback(err,filename);
                            if(files.length == 0){
                                removeDir(dirname,callback);
                            }
                        });

                    });
                }
                if(status.isFile()){
                    fs.unlink(dirname+'/'+file,(err,filename)=>{
                        if(err){
                            callback(err,filename);
                        }
                        fs.readdir(dirname,(err,files)=>{
                            if(err) callback(err,filename);
                            if(files.length == 0){
                                removeDir(dirname,callback);
                            }
                        });
                    });
                }
            });
        });
    });
}

// removeDir('../files1',(err,filename)=>{
//     if(err){
//         throw err;
//         console.log(filename+" error!");
//     }
//     console.log(filename+' has been removed! ');
// });


