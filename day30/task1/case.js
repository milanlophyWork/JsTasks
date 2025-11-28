import { findGcd } from "./gcd.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: 252,
            input2: 105,
            output: 21
        },
        {
            id: 2,
            input1: 36,
            input2: 60,
            output: 12
        },
        {
            id: 3,
            input1: 270,
            input2: 192,
            output: 6
        },
        {
            id: 4,
            input1: [],
            input2: 0,
            output: 'invalid input'
        },
        {
            id: 5,
            input1: 0/0,
            input2: 12,
            output: 'invalid input'
        },
        {
            id: 6,
            input1: {'a':1},
            input2: 40,
            output: 'invalid input'
        },
        {
            id: 7,
            input1: 12,
            input2: 0,
            output: 'invalid input'
        },
        {
            id: 8,
            input1: undefined,
            input2: 4,
            output: 'invalid input'
        },
        {
            id: 9,
            input1: null,
            input2: 3,
            output: 'invalid input'
        },
        {
            id: 10,
            input1: '3',
            input2: '4',
            output: 'invalid input'
        },
        {
            id: 11,
            input1: true,
            input2: 32,
            output: 'invalid input'
        },
        {
            id: 12,
            input1: 42,
            input2: 20,
            output: 2
        },
        {
            id: 13,
            input1: 12,
            input2: 12,
            output: 12
        },
    ]

    testCases.forEach(test => {
        let originalOutput = findGcd(test.input1, test.input2)
        let status = 'passed'

        if(JSON.stringify(originalOutput) !== JSON.stringify(test.output)) status = 'failed'
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()