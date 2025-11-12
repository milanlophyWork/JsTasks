"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_js_1 = require("../../utils/array.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    if (fns.length === 0)
        return 'invalid input';
    for (var _a = 0, fns_1 = fns; _a < fns_1.length; _a++) {
        var item = fns_1[_a];
        if (typeof item !== 'function')
            return 'invalid input';
    }
    var value;
    return function composition() {
        var x = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            x[_i] = arguments[_i];
        }
        var first = fns[0].apply(fns, x);
        for (var i = 0; i < fns.length; i++) {
            if (fns[i + 1]) {
                value = fns[i + 1](first);
                first = value;
            }
        }
        return fns.length === 1 ? first : value;
    };
}
var add5 = function (x) {
    if (x === void 0) { x = 0; }
    return x + 5;
};
var multiply3 = function (x) {
    if (x === void 0) { x = 1; }
    return x * 3;
};
var piped = pipe(add5, multiply3);
console.log(piped(5));
var multiply = function (x, y) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 1; }
    return x * y;
};
function testCase() {
    var testCases = [
        {
            id: 1,
            input1: [add5, multiply3],
            input2: [5],
            output: 30
        },
        {
            id: 2,
            input1: [multiply3, add5],
            input2: [5],
            output: 20
        },
        {
            id: 3,
            input1: [multiply3],
            input2: [5],
            output: 15
        },
        {
            id: 4,
            input1: [multiply3, add5, multiply3, add5],
            input2: [5],
            output: 65
        },
        {
            id: 5,
            input1: [multiply3, add5],
            input2: [5],
            output: 20
        },
        {
            id: 6,
            input1: [3],
            input2: [5],
            output: 'invalid input'
        },
        {
            id: 7,
            input1: [],
            input2: [5],
            output: 'invalid input'
        },
        {
            id: 8,
            input1: [multiply3, add5],
            input2: [10],
            output: 35
        },
        {
            id: 9,
            input1: [add5],
            input2: [10],
            output: 15
        },
        {
            id: 10,
            input1: [multiply3, add5],
            input2: [0],
            output: 5
        },
        {
            id: 11,
            input1: [multiply3, add5],
            input2: [-3],
            output: -4
        },
        {
            id: 12,
            input1: [multiply, add5],
            input2: [3, 4],
            output: 17
        },
        {
            id: 13,
            input1: [multiply3, add5, multiply],
            input2: [10],
            output: 35
        },
        {
            id: 14,
            input1: [multiply],
            output: 1
        },
        {
            id: 15,
            input1: [multiply, add5],
            output: 6
        }
    ];
    testCases.forEach(function (test) {
        var fn = pipe.apply(void 0, test.input1);
        var originalOutput;
        if (typeof fn === 'function') {
            originalOutput = fn.apply(void 0, test.input2);
        }
        var status = (0, array_js_1.array)(originalOutput, test.output);
        var display = "\n        Testcase ".concat(test.id, " ").concat(status, "\n        Output Expected : ").concat(test.output, "\n        Output got: ").concat(originalOutput, "\n        ");
        console.log(display);
    });
}
testCase();
