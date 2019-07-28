var User = require('./User');
function Teacher(id,name,age){
    User.apply(this,[id,name,age]);
    this.teach =function(res){
        sleep(5000);
        res.write(this.name+"讲课");
    }
}
module.exports=Teacher;

function sleep(n) {
    var start = new Date().getTime();
    //  console.log('休眠前：' + start);
    while (true) {
        if (new Date().getTime() - start > n) {
            break;
        }
    }
}


