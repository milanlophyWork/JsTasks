"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPrime = findPrime;
function findPrime(n) {
    if (typeof n !== 'number' || isNaN(n) || n <= 0 || n === Infinity)
        return 'invalid input';
    var numbers = [];
    for (var i = 2; i <= n * 5; i++) {
        numbers.push(i);
    }
    for (var i = 2; i <= n * 5; i++) {
        for (var j = 0; j < numbers.length; j++) {
            for (var k = j + 1; k < numbers.length; k++) {
                if (numbers[j] * i === numbers[k])
                    numbers.splice(k, 1);
            }
        }
    }
    numbers.splice(n, numbers.length - n);
    return numbers;
}
console.log(findPrime(13));
