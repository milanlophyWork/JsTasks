"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var array_js_1 = require("../../utils/array.js");
function sortBySum(arr) {
    var _a;
    if (!Array.isArray(arr) || arr.length === 0)
        return 'invalid input';
    var newArr = [];
    var values = [];
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (!Array.isArray(item))
            return 'invalid input';
        var sumofItems = findSum(item);
        if (typeof sumofItems === 'number') {
            newArr.push((_a = {}, _a[sumofItems] = item, _a));
            values.push(sumofItems);
        }
    }
    if (values.length === 0)
        return 'invalid input';
    values = removeDuplicateAndSort(values);
    values.forEach(function (val) {
        newArr.forEach(function (obj) {
            if (obj[val])
                result.push(obj[val]);
        });
    });
    return result;
}
function findSum(arr) {
    if (arr.length !== 0)
        return arr.reduce(function (acc, curr) { return acc + curr; });
}
function removeDuplicateAndSort(arr) {
    var newArr = __spreadArray([], arr, true);
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j])
                newArr.splice(i, 1);
        }
    }
    return newArr.sort(function (a, b) { return b - a; });
}
// console.log(sortBySum([[1,2,3],[4],[2,7]]))
function testCase() {
    var testCases = [
        {
            id: 1,
            input: [[1, 2, 3], [4], [2, 7]],
            output: [[2, 7], [1, 2, 3], [4]]
        },
        {
            id: 2,
            input: [[1, 2, 3, 'hi'], [4], [2, 7]],
            output: [[2, 7], [4]]
        },
        {
            id: 3,
            input: [[1, 2, 3], [4, 5], [2, 7]],
            output: [[4, 5], [2, 7], [1, 2, 3]]
        },
        {
            id: 4,
            input: 7,
            output: 'invalid input'
        },
        {
            id: 5,
            input: { 'a': 3, 'b': 4 },
            output: 'invalid input'
        },
        {
            id: 6,
            input: [[1, 2, 3], [], [2, 7]],
            output: [[2, 7], [1, 2, 3]]
        },
        {
            id: 7,
            input: [[], [], []],
            output: 'invalid input'
        },
        {
            id: 8,
            input: [[1, 2, 3], [2, 4], [6]],
            output: [[1, 2, 3], [2, 4], [6]]
        },
        {
            id: 9,
            input: [[-1, -2, -3], [-2, -7]],
            output: [[-1, -2, -3], [-2, -7]]
        },
        {
            id: 10,
            input: [[], [4], []],
            output: [[4]]
        },
        {
            id: 11,
            input: ['hi', [1, 2, 3], [{ 'a': 1 }], [2, 7]],
            output: 'invalid input'
        },
        {
            id: 12,
            input: [[1, 2, 3], [{ 'a': 1 }], [2, 7]],
            output: [[2, 7], [1, 2, 3]]
        },
        {
            id: 13,
            input: [[1, 2, 3], [4], [-2, 7]],
            output: [[1, 2, 3], [-2, 7], [4]]
        },
        {
            id: 14,
            input: [[0, 0, 0], [0], [-2]],
            output: [[0, 0, 0], [0], [-2]]
        },
        {
            id: 15,
            input: [[], [0], [-2]],
            output: [[0], [-2]]
        }
    ];
    testCases.forEach(function (test) {
        var originalOutput = sortBySum(test.input);
        var status = 'passed';
        if (Array.isArray(originalOutput)) {
            for (var i = 0; i < originalOutput.length; i++) {
                if (Array.isArray(originalOutput[i])) {
                    status = (0, array_js_1.array)(originalOutput[i], test.output[i]);
                }
            }
        }
        else {
            if (originalOutput !== test.output)
                status = 'failed';
        }
        var display = "\n        Testcase ".concat(test.id, " ").concat(status, "\n        Output Expected : ").concat(test.output, "\n        Output got: ").concat(originalOutput, "\n        ");
        console.log(display);
    });
}
testCase();
