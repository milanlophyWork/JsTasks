"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicates = removeDuplicates;
function removeDuplicates(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid input';
    var obj = {};
    var newArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        // if(typeof item !== 'number' || isNaN(item)) return 'invalid input'
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
    }
    Object.keys(obj).forEach(function (key) {
        newArr.push(key);
    });
    return newArr;
}
console.log(removeDuplicates([1, 2, '4', 2, 3]));
