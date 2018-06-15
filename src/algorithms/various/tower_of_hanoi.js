"use strict";

function TowerOfHanoi(fromStack, toStack, tempStack) {
  toh(fromStack.length, fromStack, toStack, tempStack);
}

function toh(n, fromStack, toStack, tempStack) {
  if (n == 1) {
    var a = fromStack.pop();
    toStack.push(a);
    console.log("move", a);
    return;
  }

  toh(n - 1, fromStack, tempStack, toStack);
  var b = fromStack.pop();
  toStack.push(b);
  console.log("move2", b);
  toh(n - 1, tempStack, toStack, fromStack);
}

exports.TowerOfHanoi = TowerOfHanoi;
