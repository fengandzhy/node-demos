var myName;
// exports.setName = function (username){
//     myName = username;
// }
// exports.getName = function(){
//     console.log('My name is '+myName);
// }

module.exports = {
    setName:function (username) {
        myName = username;
    },
    getName:function () {
        console.log('My name is '+myName);
    }
}
console.log(module.exports);