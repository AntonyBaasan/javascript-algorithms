"use strict";

function InsertionSort(inputArray) {

    //clone array
    var a = inputArray.slice(0);

    var x;
    for (var i = 1; i < a.length; i++) {
        var j = i;
        var temp;
        while (j > 0 && a[j - 1] > a[j]) {
            temp = a[j - 1];
            a[j - 1] = a[j];
            a[j] = temp;
            j--;
        }
    }

    return a;
};

exports.InsertionSort = InsertionSort;