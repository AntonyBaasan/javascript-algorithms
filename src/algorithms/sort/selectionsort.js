"use strict";

function SelectionSort(inputArray) {

    //clone array
    var a = inputArray.slice(0);

    for (var i = 0; i < a.length; i++) {
        var temp;
        for (var j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                temp = a[j];
                a[j] = a[i];
                a[i] = temp;
            }
        }
    }

    return a;
}

exports.SelectionSort = SelectionSort;