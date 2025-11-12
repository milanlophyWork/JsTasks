"use strict";
function seriesSum(n) {
    if (n <= 0 || Math.round(n) !== n || typeof n !== 'number')
        return 'invalid input';
    let sum = 0n;
    for (let i = 1n; i <= BigInt(n); i++) {
        let power = i ** i;
        sum += power;
    }
    return sum.toString().slice(-10).padStart(10, '0');
}
// console.log(seriesSum(10))
// console.log(seriesSum(1000))
function testCase() {
    const testCases = [
        {
            id: 1,
            input: 10,
            output: '0405071317'
        },
        {
            id: 2,
            input: 1000,
            output: '9110846700'
        },
        {
            id: 3,
            input: 3,
            output: '0000000032'
        },
        {
            id: 4,
            input: [],
            output: 'invalid input'
        },
        {
            id: 5,
            input: {},
            output: 'invalid input'
        },
        {
            id: 6,
            input: 5,
            output: '0000003413'
        },
        {
            id: 7,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 8,
            input: null,
            output: 'invalid input'
        },
        {
            id: 9,
            input: true,
            output: 'invalid input'
        },
        {
            id: 10,
            input: '3',
            output: 'invalid input'
        },
        {
            id: 11,
            input: 'hello',
            output: 'invalid input'
        },
        {
            id: 12,
            input: -6,
            output: 'invalid input'
        },
        {
            id: 13,
            input: 7.2,
            output: 'invalid input'
        },
        {
            id: 14,
            input: '7.2',
            output: 'invalid input'
        },
        {
            id: 15,
            input: 0,
            output: 'invalid input'
        }
    ];
    testCases.forEach(test => {
        let originalOutput = seriesSum(test.input);
        let status = 'passed';
        if (originalOutput !== test.output)
            status = 'failed';
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `;
        console.log(display);
    });
}
testCase();
