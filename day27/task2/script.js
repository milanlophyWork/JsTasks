"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frequentItem = frequentItem;
function frequentItem(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid input';
    var obj = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (typeof item !== 'number')
            return 'invalid input';
        if (!obj[item])
            obj[item] = 0;
        obj[item]++;
    }
    var freq = Math.max.apply(Math, Object.values(obj));
    for (var _a = 0, _b = Object.keys(obj); _a < _b.length; _a++) {
        var key = _b[_a];
        if (obj[key] === freq)
            return Number(key);
    }
}
console.log(frequentItem([1, 2, 3, 4, 5, 6, 7, 8, 9]));
