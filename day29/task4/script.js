"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polynomial = polynomial;
function polynomial(degree, coefficients, x) {
    if (typeof degree !== 'number' || isNaN(degree) || !Array.isArray(coefficients) ||
        coefficients.length === 0 || typeof x !== 'number' || isNaN(x))
        return 'invalid input';
    // console.log('Coefficients must be from higher order to lower order')
    if (coefficients.length !== degree + 1)
        return 'Enter correct number of coefficients from higher order to lower order';
    var sum = 0;
    var temp;
    for (var i = 0; i < coefficients.length; i++) {
        temp = coefficients[i] * (Math.pow(x, degree));
        sum += temp;
        degree--;
    }
    return sum;
}
// console.log(polynomial(3, [2,-6,2,-1], 3)) // f(x) = 2x^3 -6x^2 + 2x -1 // x=3 // f(3) = 5
// console.log(polynomial(4, [2,-4,0,0,12], 2)) // f(x) = 2x^4 - 4x^3 + 0x^2 + 0x + 12 // x=2 // f(2) = 12
