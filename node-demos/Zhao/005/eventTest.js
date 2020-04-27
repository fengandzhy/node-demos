
/**
 * node 处理事件四个步骤
 * 1. 引入 events模块 var events = require('events');
 * 2. 创建eventEmitter = new events.EventEmitter();
 * 3. 注册事件 eventEmitter.on
 * 4. 触发事件 eventEmitter.emit
 * */
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('Event1', function(){
    console.log("event1 is triggered!");
    eventEmitter.emit('Event2');
});

eventEmitter.on('Event2',function(){
    console.log('event2 is triggered!');
    eventEmitter.emit('Event3');
});


/**
 * 这里表示Event3只被触发一次
 * 当这里重复绑定Event2,并不影响原先对Event2的绑定
 * */
eventEmitter.once('Event3',function(){
    console.log('event3 is triggered!');
});

//eventEmitter.emit('Event1');

setInterval(function(){
    eventEmitter.emit('Event1');
},1000);
