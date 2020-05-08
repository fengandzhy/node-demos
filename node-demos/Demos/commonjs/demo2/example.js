var EventEmitter = require('events').EventEmitter;
module.exports = new EventEmitter();

setTimeout(function(){
    module.exports.emit('ready');
    console.log('the event is emit');
},1000);