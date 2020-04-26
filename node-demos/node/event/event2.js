var events = require('events');
var eventEmitter = new events.EventEmitter();

/**
 * 注册事件,第一个参数是事件名称，第二个参数是处理函数
 * */
eventEmitter.on('myEvent',function(){
    console.log('event is triggersed');
});

/**
 * 事件发生
 * */
eventEmitter.emit('myEvent');


