"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonKeys = commonKeys;
function commonKeys(obj1, obj2) {
    if (typeof obj1 !== 'object' || Array.isArray(obj1) || obj1 === null ||
        typeof obj2 !== 'object' || Array.isArray(obj2) || obj2 === null)
        return 'invalid input';
    var common = [];
    Object.keys(obj1).forEach(function (k1) {
        Object.keys(obj2).forEach(function (k2) {
            if (k1 === k2)
                common.push(k1);
        });
    });
    return common;
}
console.log(commonKeys({ name: 'Brad', age: 25 }, { name: 'Titan', place: 'mars' }));
