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
exports.twoArrays = twoArrays;
function twoArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2))
        return 'invalid input';
    var mySet = new Set();
    arr1.forEach(function (item) { return mySet.add(item); });
    arr1 = __spreadArray([], mySet, true);
    var intersection = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]))
            intersection.push(arr1[i]);
    }
    return intersection.length === 0 ? 'No common elements' : intersection;
}
// console.log(twoArrays([1,2,3],[2,3,4]))
