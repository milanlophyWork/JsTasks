"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFalsy = removeFalsy;
function removeFalsy(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid input';
    var newArr = [];
    arr.forEach(function (item) {
        if (item)
            newArr.push(item);
    });
    return newArr;
}
// console.log(removeFalsy([1,0,2,'',3, undefined, 4]))
