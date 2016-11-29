var expect = require("expect.js");
var sort = require("../../../src/algorithms/sort/index");

describe('Sort::', function () {
    describe('Insertion Sort', function () {
        var arr1;
        var arr1Clone;
        var previousLength;

        before(function () {
            // runs before all tests in this block
        });

        after(function () {
            // runs after all tests in this block
        });

        // runs before each test in this block
        beforeEach(function () {
            arr1 = [5, 4, 5, 7, 1, 3, 9, 10];
            arr1Clone = arr1.slice(0);
            previousLength = arr1.length;
        });

        afterEach(function () {
            // runs after each test in this block
        });

        it('should sort an array', function () {

            var sorted = sort.InsertionSort(arr1);

            expect(sorted).to.be.an('array');
            expect(sorted).to.have.length(previousLength);
            expect(sorted).to.be.eql([1, 3, 4, 5, 5, 7, 9, 10]);
        });
        it('should not change original array', function () {
            var arr1 = [5, 4, 5, 7, 1, 3, 9, 10];
            var arr1Clone = arr1.slice(0);
            var previousLength = arr1.length;

            var sorted = sort.InsertionSort(arr1);

            // make sure original array wasn't changed
            expect(arr1).to.be.eql(arr1Clone);
        });
    });
});