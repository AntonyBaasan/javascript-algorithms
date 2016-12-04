var expect = require("expect.js");
var sort = require("../../../src/algorithms/sort/index");

describe("Sort::", function () {

    // make target testing methods
    var runs = [{
        it: "Insertion Sort",
        options: {
            sort_method: sort.InsertionSort
        }

    }, {
        it: "Selection Sort",
        options: {
            sort_method: sort.SelectionSort
        }
    }, {
        it: "Quick Sort",
        options: {
            sort_method: sort.QuickSort
        }
    } ];

    runs.forEach(function (run) {
        describe(run.it, function () {
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

            it("should sort an array", function () {

                var sorted = run.options.sort_method(arr1);

                expect(sorted).to.be.an("array");
                expect(sorted).to.have.length(previousLength);
                expect(sorted).to.be.eql([1, 3, 4, 5, 5, 7, 9, 10]);
            });

            it("should not change original array", function () {
                run.options.sort_method(arr1);

                // make sure original array wasn't changed
                expect(arr1).to.be.eql(arr1Clone);
            });

            it("should not throw an error when empty array", function () {
                arr1 = [];
                var sorted = run.options.sort_method(arr1);

                // make sure original array wasn't changed
                expect(sorted).to.be.eql([]);
            });

            it("should not throw an error when single elemnt array", function () {
                arr1 = [];
                var sorted = run.options.sort_method(arr1);

                // make sure original array wasn't changed
                expect(sorted).to.be.eql([]);
            });
        });
    });

});