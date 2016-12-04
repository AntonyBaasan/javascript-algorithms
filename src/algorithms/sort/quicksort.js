"use strict";

function QuickSort(inputArray) {

    //clone array
    var a = inputArray.slice(0);

    QuickSortImpl(a, 0, a.length - 1);

    return a;
}

function QuickSortImpl(inputArray, lo, hi) {
    if (lo < hi) {
        var index = Partition(inputArray, lo, hi);
        QuickSortImpl(inputArray, lo, index - 1);
        QuickSortImpl(inputArray, index, hi);
    }
}

function Partition(inputArray, lo, hi) {
    var i = lo;
    var j = hi;

    var pivot = inputArray[Math.floor((hi + lo) / 2)];

    while (i <= j) {
        while (inputArray[i] < pivot)
            i++;
        while (inputArray[j] > pivot)
            j--;

        if (i <= j) {
            var temp = inputArray[i];
            inputArray[i] = inputArray[j];
            inputArray[j] = temp;
            i++;
            j--;
        }


    }

    return i;
}

var res = QuickSort([5, 4, 5, 7, 1, 3, 9, 10]);

exports.QuickSort = QuickSort;