import { isEven } from "./script.ts"

function testCases(){
    let testCase = [
        {
            id: 1,
            input: 14,
            output: 'even'
        },
        {
            id: 2,
            input: 14.2,
            output: 'even'
        },
        {
            id: 3,
            input: 14.7,
            output: 'odd'
        },
        {
            id: 4,
            input: 0,
            output: 'even'
        },
        {
            id: 5,
            input: 1,
            output: 'odd'
        },
        {
            id: 6,
            input: '14',
            output: 'invalid input'
        },
        {
            id: 7,
            input: -4,
            output: 'even'
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
            input: 0/0,
            output: 'invalid input'
        },
        {
            id: 11,
            input: null,
            output: 'invalid input'
        },
        {
            id: 12,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 13,
            input: true,
            output: 'invalid input'
        }
    ]

    testCase.forEach(test => {
        let status = 'passed'
        let originalOutput = isEven(test.input)

        if(originalOutput !== test.output) status = 'failed'
        console.log(`Testcase ${test.id} ${status}`)
    })
}
testCases()