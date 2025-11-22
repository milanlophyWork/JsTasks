import { FrequencySort } from "./script.ts"

function testCases(){
    let testCase = [
        {
            id: 1,
            input: [4,5,6,5,4,3],
            output: [4,4,5,5,3,6]
        },
        {
            id: 2,
            input: [4,5,'6',5,4,3],
            output: 'invalid input'
        },
        {
            id: 3,
            input: [4,5,0/0,5,4,3],
            output: 'invalid input'
        },
        {
            id: 4,
            input: 5,
            output: 'invalid input'
        },
        {
            id: 5,
            input: [],
            output: 'invalid input'
        },
        {
            id: 6,
            input: {},
            output: 'invalid input'
        },
        {
            id: 7,
            input: 'hi',
            output: 'invalid input'
        },
        {
            id: 8,
            input: true,
            output: 'invalid input'
        },
        {
            id: 9,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 10,
            input: null,
            output: 'invalid input'
        },
        {
            id: 11,
            input: [2,4,1,3],
            output: [1,2,3,4]
        },
        {
            id: 12,
            input: [1,4,2,4],
            output: [4,4,1,2]
        },
    ]

    testCase.forEach(test => {
        let status = 'passed'
        let originalOutput = FrequencySort(test.input)

        if(JSON.stringify(originalOutput) !== JSON.stringify(test.output)) status = 'failed'
       
        console.log(`Testcase ${test.id} ${status}`)
    })
}
testCases()