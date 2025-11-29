"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vowelCount = vowelCount;
function vowelCount(str) {
    if (typeof str !== 'string' || !str.trim())
        return 'invalid input';
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var count = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char))
            count++;
    }
    return count;
}
console.log(vowelCount('Hello All, welcOmE!'));
