var expect = require("expect.js");
var various = require("../../../src/algorithms/various/index");

describe("Various::", function() {
  describe("Tower of hanoi", function() {
    var fromStack = [];
    var toStack = [];
    var tempStack = [];

    before(function() {
      // runs before all tests in this block
    });

    after(function() {
      // runs after all tests in this block
    });

    // runs before each test in this block
    beforeEach(function() {
      fromStack = ['a', 'b', 'c', 'd'];
      toStack = [];
      tempStack = [];
    });

    afterEach(function() {
      // runs after each test in this block
    });

    it("should clear from stack", function() {
      various.TowerOfHanoi(fromStack, toStack, tempStack);

      expect(fromStack.length).to.be.eql(0);
    });

    it("should clear temp stack", function() {
      various.TowerOfHanoi(fromStack, toStack, tempStack);

      expect(tempStack.length).to.be.eql(0);
    });

    it("should move correcly", function() {
      various.TowerOfHanoi(fromStack, toStack, tempStack);

      expect(toStack).to.be.eql(['a', 'b', 'c', 'd']);
    });
  });
});
