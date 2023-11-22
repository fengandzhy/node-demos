
/**
 * 关于创建buffer 有以下这么几种方式
 * */
let buffer1 = Buffer.alloc(10);
console.log(buffer1);

// 这种方式并不安全原因是会带有内存数据的
let buffer2 = Buffer.allocUnsafe(1000);
console.log(buffer2);

let buf_3 = Buffer.from('hello');
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf_3);
console.log(buf_4);
