

var myModule = require('./module.js');
myModule.setName('Sam');
myModule.getName();
console.log('======');


/**
 * 从这里可以看出，这里的myModule的这个变量，其实就是module.js里面的那个module.exports的这个变量
 * */
console.log(myModule);


/**
 * 通过require来得到myModule之后就会被缓存，以后无论多少次require 得到的都是同一个module
 * 当通过./调用时就表示相对路径，相对于使用require的这个文件的路径.
 * 当通过/调用时就表示绝对路径
 * 当既没有./也没有/就表示核心模块或者加载自mode_modules目录
 *
 * */
var myModule1 = require('./module.js');
console.log(myModule1==myModule);

