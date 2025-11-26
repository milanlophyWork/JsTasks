import { convertSec } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: 9000,
            output: '2 hours 30 minutes'
        },
        {
            id: 2,
            input: 6300,
            output: '1 hours 45 minutes'
        },
        {
            id: 3,
            input: 3600,
            output: '1 hours'
        },
        {
            id: 4,
            input: '9000',
            output: 'invalid input'
        },
        {
            id: 5,
            input: 90000,
            output: '25 hours'
        },
        {
            id: 6,
            input: [1,2,3],
            output: 'invalid input'
        },
        {
            id: 7,
            input: {a: 4},
            output: 'invalid input'
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: 0,
            output: 'invalid input'
        },
        {
            id: 10,
            input: 6000,
            output: '1 hours 67 minutes'
        },
        {
            id: 11,
            input: 7200,
            output:'2 hours'
        },
        {
            id: 12,
            input: -20,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = convertSec(test.input)
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