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
exports.rotateByK = rotateByK;
function rotateByK(arr, k) {
    if (!Array.isArray(arr) || arr.length === 0 || k >= arr.length || k <= 0)
        return 'invalid input';
    var newArr = [];
    for (var i = 0; i < k; i++) {
        var ele = arr.pop();
        newArr.unshift(ele);
    }
    return __spreadArray(__spreadArray([], newArr, true), arr, true);
}
console.log(rotateByK([1, 2, 3, 4, 5], 2));
