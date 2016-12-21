"use strict";

function HeapSort(inputArray) {

    //clone array
    var a = inputArray.slice(0);
    var heapSize = a.length;

    buildMaxHeap(a);

    for (var i = a.length - 1; i >= 0; i--) {
        swap(a, i, 0);

        heapSize = heapSize - 1;
        heapify(a, 0, heapSize);
    }

    return a;
}

function heapify(arr, index, heapSize) {
    // left child
    var left = 2 * index + 1;
    // right child
    var right = 2 * index + 2;

    var largest = index;

    // set largest to left if left is bigger than index
    if(left < heapSize && arr[left] > arr[index]){
        largest = left;
    }

    // set largest to right if right is bigger than index
    if(right < heapSize && arr[right] > arr[largest]){
        largest = right;
    }

    //swap and continue recursion for next child
    if(largest !== index){
        swap(arr, index, largest);

        heapify(arr, largest, heapSize);
    }
}

function buildMaxHeap(arr) {
    for (var i = (Math.floor(arr.length / 2))-1; i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

HeapSort([5, 4, 5, 7, 1, 3, 9, 10]);

exports.HeapSort = HeapSort;