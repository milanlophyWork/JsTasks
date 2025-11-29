function linearSearch(num, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num)
            return "element ".concat(num, " found at index ").concat(i);
    }
    return 'element not found';
}
console.log(linearSearch(3, [1, 4, 3, 2, 5]));
