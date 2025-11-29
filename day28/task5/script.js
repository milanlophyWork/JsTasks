"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfUniqueNum = sumOfUniqueNum;
function sumOfUniqueNum(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid input';
    var myObj = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (typeof num !== 'number' || isNaN(num))
            return 'invalid input';
        if (!myObj[num])
            myObj[num] = 0;
        myObj[num]++;
    }
    var sum = 0;
    Object.keys(myObj).forEach(function (key) {
        if (myObj[key] === 1)
            sum += Number(key);
    });
    return sum;
}
console.log(sumOfUniqueNum([1, 2, 3, 2]));
