const EventEmitter = require('events');

class ClientEmitter extends EventEmitter{}

const myEmitter = new ClientEmitter();


function fn1(){
    console.log('This is fun1');
}

function fn2(a,b){
    console.log('This is fun2',a,b);
}

myEmitter.on('event1',fn1);
myEmitter.on('event1',fn2);


myEmitter.emit('event1'); //一下子会触发两个函数

myEmitter.emit('event1','3','b');

myEmitter.removeListener('event1',fn1);

myEmitter.emit('event1'); // 移除了fn1之后就只触发fn2

myEmitter.emit('event1','3','b');
