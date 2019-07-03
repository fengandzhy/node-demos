var events = require("events");
var http = require("http");

function UserBean(){
    this.eventEmit = new evets.EventEmitter();
    this.register = function(req,resp){
        console.log("register");
        req['username'] = 'aa';
        req['pwd'] = 'bb';
        this.eventEmit.emit('registerSuccess','aa','bb');
    }
    this.login=function(req,resp){
        console.log('login');
        resp.write('username:'+req['username']);
        resp.write('password'+req['pwd']);
        resp.write('login');
    }
}
module.exports = UserBean;