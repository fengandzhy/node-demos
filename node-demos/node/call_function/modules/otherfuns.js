// function f2(response){
//     response.write('This is fun2');
// }
// module.exports = f2;

module.exports={
    fun2:function(response){
        response.write('this is fun2');
        console.log(this);
    },
    fun3:function(response){
        response.write('this is fun3');
        console.log('this is fun3');
    }
}

