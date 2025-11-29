"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findGcd = findGcd;
function findGcd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) || a === 0 || b === 0)
        return 'invalid input';
    var largest, smallest;
    if (a > b) {
        largest = a;
        smallest = b;
    }
    else {
        largest = b;
        smallest = a;
    }
    var remainder = largest % smallest;
    while (remainder !== 0) {
        var result = smallest % remainder;
        smallest = remainder;
        remainder = result;
    }
    return smallest;
}
// console.log(findGcd(252,105)) // 21
// console.log(findGcd(36,60)) // 12
