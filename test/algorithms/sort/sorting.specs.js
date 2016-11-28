var expect = require("expect.js");
var sort = require("../../../src/algorithms/sort/index");

describe('Sort::', function () {
    describe('Insertion Sort', function () {
        it('should sort an array', function (done) {
            var arr1 = [5, 4, 5, 7, 1, 3, 9, 10];
            var previousLength = arr1.length;

            var sorted = sort.InsertionSort(arr1);

            expect(sorted).to.be.an('array');
            expect(sorted).to.have.length(previousLength);
            expect(sorted).to.be.eql([1, 3, 4, 5, 5, 7, 9, 10]);
        });
    });
});