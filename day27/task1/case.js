import { removeDuplicates } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3,4,5,6,7,8,9],
            output: [1,2,3,4,5,6,7,8,9]
        },
        {
            id: 2,
            input: [1,2,4,2,3],
            output: [1,2,3,4]
        },
        {
            id: 3,
            input: [1,0,1,0,1],
            output: [0,1]
        },
        {
            id: 4,
            input: [1,1,1,1],
            output: [1]
        },
        {
            id: 5,
            input: [],
            output: 'invalid input'
        },
        {
            id: 6,
            input: [1,'2', 1, '2'],
            output: 'invalid input'
        },
        {
            id: 7,
            input: '1',
            output: 'invalid input'
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
            input: {'a': 6},
            output: 'invalid input'
        },
        {
            id: 11,
            input: {'a': [4,5]},
            output: 'invalid input'
        },
        {
            id: 12,
            input: true,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = removeDuplicates(test.input)
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