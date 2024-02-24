
/**
 * 模块暴露数据的方式有两种：
 * 1. module.exports = value
 * 2. exports.name = value
 *
 * 在CommonJS规范 module.exports === exports, 但是, module.exports是真正导出的对象，当你引入一个模块时，实际上得到的是module.exports所指向的内容。
 * exports是module.exports的一个引用，方便导出多个属性或方法。
 * */
function work () {
    console.log("I am working. ");
}

function rest(){
    console.log("I am resting. ");
}
module.exports = {work,rest}

