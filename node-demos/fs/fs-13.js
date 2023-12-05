

//递归创建文件
fs.mkdir('./a/b/c',{recursive: true}, err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('创建成功.');
});