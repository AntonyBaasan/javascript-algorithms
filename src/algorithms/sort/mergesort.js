"use strict";

function MergeSort(inputArray) {

    //clone array
    var a = inputArray.slice(0);
    var b = inputArray.slice(0);

    MergeSortSplit(a, 0, a.length, b);

    return b;
}

function MergeSortSplit(a, start, end, b) {
    if ((end - start) < 2)
        return;

    var middle = Math.floor((start + end) / 2);

    MergeSortSplit(a, start, middle, b);
    MergeSortSplit(a, middle + 1, end, b);

    mergeArray(a, start, middle, end, b);
}

function mergeArray(a, start, middle, end, b) {
    var i = start;
    var j = middle;

    for (var k = i; k < end; k++) {
        if (i < middle && ((j >= end) || a[i] <= a[j])) {
            b[k] = a[i];
            i++;
        } else {
            b[k] = a[j];
            j++;
        }
    }

    for (var s = start; s < end; s++) {
        a[s] = b[s];
    }
}

// var res = MergeSort([5, 4, 5, 7, 1, 3, 9, 10]);
var res = MergeSort([5, 4, 7, 1]);

exports.MergeSort = MergeSort;