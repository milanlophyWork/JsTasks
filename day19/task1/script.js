"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_js_1 = require("../../utils/array.js");
function detectSymmetry(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0)
        return 'invalid input';
    // for(let row of matrix) {
    //     if(!Array.isArray(row)) return 'invalid input'
    //     if(row.length !== matrix.length) return 'not a square matrix'
    // }
    for (var i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i]))
            return 'invalid input';
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i].length !== matrix.length)
                return 'not a square matrix';
            if (typeof matrix[i][j] !== 'number' || isNaN(matrix[i][j]))
                return 'invalid input';
            if (matrix[i][j] !== matrix[j][i])
                return 'not symmetric';
        }
    }
    return { horizontal: true, vertical: true, diagonal: true };
}
// console.log(detectSymmetry([[5,2,3],[2,6,5], [3,5,8]]))
function testCase() {
    var testCases = [
        {
            id: 1,
            input: [[1, 2], [2, 1]],
            output: { horizontal: true, vertical: true, diagonal: true }
        },
        {
            id: 2,
            input: [[1, 2, 3], [2, 6, 5], [3, 5, 7]],
            output: { horizontal: true, vertical: true, diagonal: true }
        },
        {
            id: 3,
            input: [[1, 2], [2]],
            output: 'not a square matrix'
        },
        {
            id: 4,
            input: [[1, 2, 3], [1, 2, 3], [1, 2, 3]],
            output: 'not symmetric'
        },
        {
            id: 5,
            input: [[1]],
            output: { horizontal: true, vertical: true, diagonal: true }
        },
        {
            id: 6,
            input: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            output: { horizontal: true, vertical: true, diagonal: true }
        },
        {
            id: 7,
            input: [[3, 5, 7]],
            output: 'not a square matrix'
        },
        {
            id: 8,
            input: [],
            output: 'invalid input'
        },
        {
            id: 9,
            input: {},
            output: 'invalid input'
        },
        {
            id: 10,
            input: [1, 2, 3, 4],
            output: 'invalid input'
        },
        {
            id: 11,
            input: [[0, 2, 3], [2, 1, 5], [3, 5, 2]],
            output: { horizontal: true, vertical: true, diagonal: true }
        },
        {
            id: 12,
            input: [['1', 2, '3'], [2, 6, 5], [3, 5, 7]],
            output: 'invalid input'
        },
        {
            id: 13,
            input: 10,
            output: 'invalid input'
        },
        {
            id: 14,
            input: [[1, 2, 0 / 0], [2, 6, 5], [0 / 0, 5, 7]],
            output: 'invalid input'
        },
        {
            id: 15,
            input: [[2, 3], [12, 3]],
            output: 'not symmetric'
        }
    ];
    testCases.forEach(function (test) {
        var originalOutput = detectSymmetry(test.input);
        var status = (0, array_js_1.objCheck)(originalOutput, test.output);
        // console.log(originalOutput, test.output)
        // if(originalOutput !== test.output) return 'failed'
        var display = "\n        Testcase ".concat(test.id, " ").concat(status, "\n        Output Expected : ").concat(test.output, "\n        Output got: ").concat(originalOutput, "\n        ");
        console.log(display);
    });
}
testCase();
