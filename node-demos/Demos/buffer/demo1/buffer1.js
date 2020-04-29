/**
 * 1. buffer 里面是按照十六进制的数字来存储的
 * */
//const buf = Buffer.alloc(20);
// console.log(buf);
// console.log(buf.write('buffer',5,3)); //返回的是填充的字节数
// console.log(buf);
//
// console.log(buf.fill('eric')); //返回的是填充后的buffer，另外它会将整个buffer填满，并且把原来的内容覆盖掉

const buf = Buffer.from('test');
console.log(buf.length);
console.log(buf.toString('utf-8',1,3));

console.log(buf.toJSON());




