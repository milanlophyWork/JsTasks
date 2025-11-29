"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = toCamelCase;
function toCamelCase(str) {
    if (typeof str !== 'string' || !str.trim() || str[0] === '_' || str[-1] === '_')
        return 'invalid input';
    var symbols = ['__', ' ', '#', '^', '(', ')', '*', '<', '>', '{', '}', ';', '-'];
    for (var _i = 0, symbols_1 = symbols; _i < symbols_1.length; _i++) {
        var s = symbols_1[_i];
        if (str.includes(s))
            return 'invalid input';
    }
    var newArr = [];
    for (var _a = 0, _b = str.split('_'); _a < _b.length; _a++) {
        var item = _b[_a];
        newArr.push(item.replaceAll(item[0], item[0].toUpperCase()));
    }
    var first = newArr.join('')[0].toLowerCase();
    return first + newArr.join('').slice(1);
}
console.log(toCamelCase('_hello_world_from_js_'));
