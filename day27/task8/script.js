"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toQueryStr = toQueryStr;
function toQueryStr(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj) || obj === null)
        return 'invalid input';
    var keys = Object.keys(obj);
    var newStr = '';
    keys.forEach(function (key) {
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key]))
            newStr = toQueryStr(obj[key]);
        newStr += "".concat(key, "=").concat(obj[key], "&");
    });
    return newStr.slice(0, -1);
}
// console.log(toQueryStr({'hi': [1,2,3]}) === 'hi=1,2,3')
// console.log(toQueryStr({name: {first: 'John', last: 'Cruise'}}))
