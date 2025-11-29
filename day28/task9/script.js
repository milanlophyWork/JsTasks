"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeDuplicateIDs = mergeDuplicateIDs;
function mergeDuplicateIDs(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid input';
    var myObj = {};
    var newArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var obj = arr_1[_i];
        if (typeof obj !== 'object' || Array.isArray(obj) || obj === null)
            return 'invalid input';
        if (!obj.id || !obj.value)
            return 'invalid input';
        if (!myObj[obj.id])
            myObj[obj.id] = obj.value;
        else
            myObj[obj.id] = myObj[obj.id] + obj.value;
    }
    Object.keys(myObj).forEach(function (key) {
        newArr.push({ id: Number(key), value: myObj[key] });
    });
    return newArr;
}
console.log(mergeDuplicateIDs([{ id: 1, value: 10 }, { id: 2, value: 20 }, { id: 1, value: 15 }]));
