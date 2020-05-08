
const EventEmitter = require('events');

class ClientEmitter extends EventEmitter{}

const myEmitter = new ClientEmitter();

myEmitter.on('event1',()=>{
    console.log('event1 was emitted');
});

myEmitter.on('event2',(a,b)=>{
    console.log('event2 was emitted',a,b);
});

myEmitter.emit('event1');

myEmitter.emit('event2','2',4);

myEmitter.emit('event1');

myEmitter.emit('event2');


