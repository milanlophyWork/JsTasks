import { toFahrenheit } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: 0,
            output: 32
        },
        {
            id: 2,
            input: 100,
            output: 212
        },
        {
            id: 3,
            input: '0',
            output: 'invalid input'
        },
        {
            id: 4,
            input: 0/0,
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
            input: 50,
            output: 122
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
            input: -100,
            output: -148
        },
        {
            id: 11,
            input: -40,
            output: -40
        },
        {
            id: 12,
            input: 200/2,
            output: 212
        }
    ]

    testCases.forEach(test => {
        let originalOutput = toFahrenheit(test.input)
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