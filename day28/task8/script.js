"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceNum = replaceNum;
function replaceNum(str) {
    if (typeof str !== 'string' || !str.trim())
        return 'invalid input';
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (str.includes(num)) {
            str = str.replaceAll(num, '#');
        }
    }
    return str;
}
console.log(replaceNum('Room 45 on floor 3'));
