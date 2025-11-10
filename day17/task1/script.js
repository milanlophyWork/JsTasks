"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_js_1 = require("../../utils/array.js");
function Partition(arr, fn) {
    if (!Array.isArray(arr) || arr.length === 0 || typeof fn !== 'function')
        return 'invalid input';
    var trueArr = [];
    var falseArr = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        // if(typeof item !== 'number' || isNaN(item)) return 'invalid input'
        if (fn(item) === true)
            trueArr.push(item);
        else if (fn(item) === false)
            falseArr.push(item);
        else
            return 'invalid input';
    }
    return [trueArr, falseArr];
}
console.log(Partition([1, 2, 3, 4], function (x) { return x % 2 === 0; }));
function testCase() {
    var testCases = [
        {
            id: 1,
            input1: [1, 2, 3, 4, 5],
            input2: function (x) { return x % 2 === 0; },
            output: [[2, 4], [1, 3, 5]]
        },
        {
            id: 2,
            input1: [1, 2, 3, 4, 5],
            input2: function (x) { return x + 2 === 4; },
            output: [[2], [1, 3, 4, 5]]
        },
        {
            id: 3,
            input1: [1, 2, 3, 4, 5],
            input2: function (x) { return x % 2 !== 0; },
            output: [[1, 3, 5], [2, 4]]
        },
        {
            id: 4,
            input1: {},
            input2: function (x) { return x % 2 === 0; },
            output: 'invalid input'
        },
        {
            id: 5,
            input1: 0 / 0,
            input2: function (x) { return x % 2 === 0; },
            output: 'invalid input'
        },
        {
            id: 6,
            input1: null,
            input2: function (x) { return x % 2 === 0; },
            output: 'invalid input'
        },
        {
            id: 7,
            input1: [],
            input2: function (x) { return x % 2 === 0; },
            output: 'invalid input'
        },
        {
            id: 8,
            input1: undefined,
            input2: function (x) { return x % 2 === 0; },
            output: 'invalid input'
        },
        {
            id: 9,
            input1: [1, 2, 3, 4, 5],
            input2: 3,
            output: 'invalid input'
        },
        {
            id: 10,
            input1: [1, 2, 3],
            input2: function (x) { return x + 2; },
            output: 'invalid input'
        },
        {
            id: 11,
            input1: [0, 0, 0, 0],
            input2: function (x) { return x === 0; },
            output: [[0, 0, 0, 0], []]
        },
        {
            id: 12,
            input1: [1],
            input2: function (x) { return x !== 1; },
            output: [[], [1]]
        },
        {
            id: 13,
            input1: true,
            input2: function (x) { return x % 3 === 0; },
            output: 'invalid input'
        },
        {
            id: 14,
            input1: ['hi', 'hello'],
            input2: function (x) { return x.length === 2; },
            output: [['hi'], ['hello']]
        },
        {
            id: 15,
            input1: [10, 23, 30, 28],
            input2: function (x) { return x % 10 === 0; },
            output: [[10, 30], [23, 28]]
        },
        {
            id: 16,
            input1: [1, 2, 'hi', 3, 'hello', 4],
            input2: function (x) { return typeof x === 'string'; },
            output: [['hi', 'hello'], [1, 2, 3, 4]]
        },
        {
            id: 17,
            input1: [1, 2, ['hi', 3], 'hello', 4],
            input2: function (x) { return typeof x === 'string'; },
            output: [['hi', 'hello'], [1, 2, ['hi', 3], 4]]
        },
        {
            id: 18,
            input1: [1, 2, { 'hi': 3, 'a': { '1': 1 } }, 'hello', 4],
            input2: function (x) { return typeof x === 'string'; },
            output: [['hi', 'hello'], [1, 2, { 'hi': 3 }, 4]]
        }
    ];
    testCases.forEach(function (test) {
        var originalOutput = Partition(test.input1, test.input2);
        var status = 'passed';
        if (Array.isArray(originalOutput)) {
            for (var i = 0; i < originalOutput.length; i++) {
                status = (0, array_js_1.array)(originalOutput[i], test.output[i]);
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
