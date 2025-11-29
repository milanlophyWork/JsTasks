"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFahrenheit = toFahrenheit;
function toFahrenheit(C) {
    if (typeof C !== 'number' || isNaN(C))
        return 'invalid input';
    var F = (9 / 5 * C) + 32;
    return F;
}
console.log(toFahrenheit(0));
