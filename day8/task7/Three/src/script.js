function SumOfArray(arr) {
    var newArr = [];
    arr.forEach(function (item) {
        var numTxt = String(item).replaceAll(',', '');
        newArr.push(Number(numTxt));
    });
    return newArr.reduce(function (acc, curr) { return acc + curr; });
}
console.log(SumOfArray([[1, 2, 3], [0, 7]]));
function sum() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (acc, curr) { return acc + curr; });
}
console.log(sum(1, 2, 3, 4, 5));
