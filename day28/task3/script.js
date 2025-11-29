"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSingleObj = toSingleObj;
function toSingleObj(arr) {
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid input';
    var myObj = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var ob = arr_1[_i];
        if (typeof ob !== 'object' || Array.isArray(ob) || ob === null)
            return 'invalid input';
        if (!ob.key || !ob.value || typeof ob.key === 'object' || typeof ob.key === 'boolean')
            return 'invalid input';
        // console.log(!ob.key)
        myObj[ob.key] = ob.value;
    }
    return myObj;
}
console.log(toSingleObj([{ key: 'a', value: 1 }, { key: 'b', value: 2 }]));
