var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.emit('Event2');
eventEmitter.on('Event2',function(){
    console.log('event2 is triggered!');

});