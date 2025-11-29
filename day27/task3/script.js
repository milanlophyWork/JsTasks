"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findArmstrong = findArmstrong;
function findArmstrong(num) {
    if (typeof num !== 'number' || isNaN(num) || num < 0)
        return 'invalid input';
    var numStr = String(num);
    var count = numStr.length;
    var sum = 0;
    for (var _i = 0, numStr_1 = numStr; _i < numStr_1.length; _i++) {
        var n = numStr_1[_i];
        sum += Math.pow(n, count);
    }
    if (Number(sum) === num)
        return true;
    else
        return false;
}
// console.log(findArmstrong(153))
