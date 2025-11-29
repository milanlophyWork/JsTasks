"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = selectionSort;
function selectionSort(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid input';
    var start = 0;
    var end = arr.length - 1;
    while (start !== end) {
        var min = Infinity;
        for (var i = start; i <= end; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i]))
                return 'invalid input';
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        var index = arr.lastIndexOf(min);
        var temp = arr[start];
        arr[start] = min;
        arr[index] = temp;
        start++;
    }
    return arr;
}
console.log(selectionSort([2, 1, 4, 3]));
