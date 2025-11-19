import { matrixRotate } from "./script.ts";


function testCase(){
    const testCases = [
        {
            id: 1,
            input: [[1,2,3], [4,5,6], [7,8,9]],
            output: [[7,4,1], [8,5,2], [9,6,3]]
        },
        {
            id: 2,
            input: [[1,2,3], [4,5], [7,8,9]],
            output: 'not a square matrix'
        },
        {
            id: 3,
            input: [[1,2], [4,5]],
            output: [[4,1], [5,2]]
        },
        {
            id: 4,
            input: ['hi', [4,5,6], [7,8,9]],
            output: 'invalid input'
        },
        {
            id: 5,
            input: [],
            output: 'invalid input'
        },
        {
            id: 6,
            input: [1,2],
            output: 'invalid input'
        },
        {
            id: 7,
            input: [[1,'2'], [4,5]],
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
            input: [4,5,3],
            output: 'invalid input'
        },
        {
            id: 11,
            input: {'a': [4,5]},
            output: 'invalid input'
        },
        {
            id: 12,
            input: [[0,0], [0,0]],
            output: [[0,0], [0,0]]
        }
    ]

    testCases.forEach(test => {
        let originalOutput = matrixRotate(test.input)
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