"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = bubbleSort;
function bubbleSort(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid input';
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || isNaN(arr[i]))
            return 'invalid input';
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([2, 4, 1, 3]));
