var myName;
exports.setName = function (username){
    myName = username;
}
exports.getName = function(){
    console.log('My name is '+myName);
}

