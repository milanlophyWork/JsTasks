"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildObj = buildObj;
function buildObj(str) {
    if (typeof str !== 'string' || !str.trim())
        return 'invalid input';
    var myObj = {};
    for (var _i = 0, _a = str.split('&'); _i < _a.length; _i++) {
        var item = _a[_i];
        if (!item.includes('='))
            return 'invalid input';
        var objItem = item.split('=');
        myObj[objItem[0]] = objItem[1];
    }
    return myObj;
}
// console.log(buildObj('name=John&age=20'))
