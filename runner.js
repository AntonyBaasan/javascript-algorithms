var various = require("./src/algorithms/various/tower_of_hanoi");

var fromStack = [1, 2, 3, 4];
var toStack = [];
var tempStack = [];

various.TowerOfHanoi(fromStack, toStack, tempStack);

console.log(fromStack);
console.log(toStack);
console.log(tempStack);
