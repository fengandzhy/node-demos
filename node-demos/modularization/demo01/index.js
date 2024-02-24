

/**
 * require('./frank'); 得到的是module.exports 的本身, 而正常情况下, module.exports = {},
 * 如果令 module.exports = {work,rest} 的话, 这里就可以用这种方式调用, frank.rest();frank.work();
 * 如果令 module.exports = work 的话， 这里只能 frank(); 这一种方式调用
 * */
const frank = require('./frank');
frank.rest();
frank.work();
