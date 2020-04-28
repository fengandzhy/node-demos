
/**
 * __filename 与 __dirname 都是全局变量
 * setInterval clearInterval setTimeout clearTimeout 都是全局函数
 * */
console.log( __filename);
console.log( __dirname);

function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
//var myInterval = setInterval(printHello, 2000);

//clearInterval(myInterval);

var t = setTimeout(printHello, 2000);
clearTimeout(t);


