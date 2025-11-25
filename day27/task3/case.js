import { findArmstrong } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: 0,
            output: true
        },
        {
            id: 2,
            input: 153,
            output: true
        },
        {
            id: 3,
            input: 3,
            output: true
        },
        {
            id: 4,
            input: '4',
            output: 'invalid input'
        },
        {
            id: 5,
            input: [1,2],
            output: 'invalid input'
        },
        {
            id: 6,
            input: {'a':1},
            output: 'invalid input'
        },
        {
            id: 7,
            input: 45,
            output: false
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: null,
            output: 'invalid input'
        },
        {
            id: 10,
            input: -153,
            output: 'invalid input'
        },
        {
            id: 11,
            input: -3,
            output: 'invalid input'
        },
        {
            id: 12,
            input: 12/2,
            output: true
        }
    ]

    testCases.forEach(test => {
        let originalOutput = findArmstrong(test.input)
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