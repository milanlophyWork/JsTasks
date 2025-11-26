import { mergeDuplicateIDs } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [{id: 1, value: 10}, {id:2, value: 20},{id:1, value: 15}],
            output: [{id: 1, value: 25}, {id:2, value: 20}]
        },
        {
            id: 2,
            input: [{id: 1, value: 10}, {id:2, value: 20},{id:3, value: 15}],
            output: [{id: 1, value: 10}, {id:2, value: 20}, {id:3, value: 15}]
        },
        {
            id: [1,2,3,4],
            output: 'invalid input'
        },
        {
            id: 4,
            input: null,
            output: 'invalid input'
        },
        {
            id: 5,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 6,
            input: 'hello',
            output: 'invalid input'
        },
        {
            id: 7,
            input: [{id: 1, num: 10}, {id:2, num: 20},{id:1, value: 15}],
            output: 'invalid input'
        },
        {
            id: 8,
            input: [1,2],
            output: 'invalid input'
        },
        {
            id: 9,
            input: true,
            output: 'invalid input'
        },
        {
            id: 10,
            input: {a: 1},
            output: 'invalid input'
        },
        
    ]

    testCases.forEach(test => {
        let originalOutput = mergeDuplicateIDs(test.input)
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