"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSec = convertSec;
function convertSec(sec) {
    if (typeof sec !== 'number' || isNaN(sec) || sec <= 0)
        return 'invalid input';
    var obj = { 0.5: 30, 0.25: 15, 0.75: 45 };
    var hours = sec / 3600;
    var decimal = hours - Math.floor(hours);
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        if (decimal === Number(key))
            return "".concat(Math.floor(hours), " hours ").concat(obj[key], " minutes");
    }
    if (decimal === 0)
        return "".concat(hours, " hours");
    else
        return "".concat(Math.floor(hours), " hours ").concat(decimal.toFixed(2) * 100, " minutes");
}
console.log(convertSec(7200));
