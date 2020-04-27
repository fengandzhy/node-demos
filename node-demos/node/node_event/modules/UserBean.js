var events = require("events");

function UserBean(){
    this.eventEmit = new events.EventEmitter();//这是一个事件的发生器
    this.register = function(req){
        console.log("register");
        req['username'] = 'aa';
        req['pwd'] = 'bb';
        console.log('发送事件之前');
        this.eventEmit.emit('registerSuccess',req); //事件发生
        console.log('发送事件之后');
    }
    this.login=function(req,resp){
        console.log('login');
        resp.write('username:'+req['username']);
        resp.write('<br/>');
        resp.write('password:'+req['pwd']);
        resp.write('<br/>');
        resp.write('login');
    }
}
module.exports = UserBean;