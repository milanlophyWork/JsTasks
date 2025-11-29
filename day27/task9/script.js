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
exports.checkSort = checkSort;
function checkSort(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid input';
    var ascend = __spreadArray([], arr, true).sort(function (a, b) { return a - b; });
    var descend = __spreadArray([], ascend, true).reverse();
    var flag = null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== ascend[i]) {
            if (arr[i] !== descend[i])
                return 'unsorted';
            else
                flag = 1;
        }
        else
            flag = 0;
    }
    if (flag === 0)
        return 'ascending';
    else
        return 'descending';
}
// console.log(checkSort([4,3,2,1]))
