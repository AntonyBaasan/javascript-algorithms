var various = require("../src/algorithms/various");

function run() {
    var fromStack = [1, 2, 3, 4];
    var toStack = [];
    var tempStack = [];

    various.TowerOfHanoi(fromStack, toStack, tempStack);

    // console.log(fromStack);
    // console.log(toStack);
    // console.log(tempStack);
}

exports.run = run;
