
const EventEmitter = require('events');

class ClientEmitter extends EventEmitter{}

const myEmitter = new ClientEmitter();

myEmitter.once('event1',()=>{
    console.log('event1 was emitted');
});

myEmitter.once('event2',(a,b)=>{
    console.log('event2 was emitted',a,b);
});

myEmitter.emit('event1');

myEmitter.emit('event2','2',4);

myEmitter.emit('event1'); //这里不起作用了因为是once

myEmitter.emit('event2'); //这里不起作用了因为是once