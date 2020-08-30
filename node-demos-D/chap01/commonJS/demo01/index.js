let caculate = require('./caculate');
let loadsh = require('loadsh');

caculate.add(1,2);
caculate.substract(1,3);

let arr = [1,2];
let arr2 = loadsh.concat(arr,3,4,[5]);
console.log(arr2);

