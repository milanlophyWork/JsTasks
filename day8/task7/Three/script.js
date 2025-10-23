function SumOfArray(arr) {
    var newArr = [];
    arr.forEach(function (item) {
        var numTxt = String(item).replaceAll(',', '');
        // newArr.push()
        console.log(Number(numTxt));
    });
}
SumOfArray([[1, 2, 3], [0, 7]]);
