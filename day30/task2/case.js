import { findPrime } from "./prime.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: 13,
            output: [2,3,5,7,11,13,17,19,23,29,31,37,41]
        },
        {
            id: 2,
            input: 4,
            output: [2,3,5,7]
        },
        {
            id: 3,
            input: 0,
            output: 'invalid input'
        },
        {
            id: 4,
            input: -4,
            output: 'invalid input'
        },
        {
            id: 5,
            input: 0/0,
            output: 'invalid input'
        },
        {
            id: 6,
            input: {'a':1},
            output: 'invalid input'
        },
        {
            id: 7,
            input: null,
            output: 'invalid input'
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: false,
            output: 'invalid input'
        },
        {
            id: 10,
            input: '3',
            output: 'invalid input'
        },
        {
            id: 11,
            input: true,
            output: 'invalid input'
        },
        {
            id: 12,
            input: 20,
            output: [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71]
        },
    ]

    testCases.forEach(test => {
        let originalOutput = findPrime(test.input)
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