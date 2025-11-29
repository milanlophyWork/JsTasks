"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = binarySearch;
var array_js_1 = require("../../../utils/array.js");
function binarySearch(arr, item) {
    if (!Array.isArray(arr) || arr.length === 0 || typeof item !== 'number' || isNaN(item))
        return 'invalid input';
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (typeof num !== 'number' || isNaN(num))
            return 'invalid input';
    }
    if ((0, array_js_1.array)(arr, __spreadArray([], arr, true).sort(function (a, b) { return a - b; })) === 'failed')
        return 'insert an array sorted in ascending order';
    var first = 0;
    var last = arr.length;
    var mid;
    while (first < last) {
        mid = Math.floor((first + last) / 2);
        if (arr[mid] === item)
            return "element ".concat(item, " found at index ").concat(mid);
        if (arr[mid] < item) {
            first = mid + 1;
            last = arr.length - 1;
        }
        if (arr[mid] > item) {
            first = 0;
            last = mid - 1;
        }
        return 'element not found';
    }
}
// console.log(binarySearch([32,40,43,62], 40))
// console.log(binarySearch([1,2,4,5], 3))
