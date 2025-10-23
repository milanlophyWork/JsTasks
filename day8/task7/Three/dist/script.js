"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SumOfArray(arr) {
    let newArr = [];
    arr.forEach(item => {
        let numTxt = String(item).replaceAll(',', '');
        newArr.push(Number(numTxt));
    });
    return newArr.reduce((acc, curr) => acc + curr);
}
console.log(SumOfArray([[1, 2, 3], [0, 7]]));
function sum(...n) {
    return n.reduce((acc, curr) => acc + curr);
}
console.log(sum(1, 2, 3, 4, 5));
//# sourceMappingURL=script.js.map