import { insertionSort } from "./insertion.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [2,4,1,3],
            output: [1,2,3,4]
        },
        {
            id: 2,
            input: [0,3,1,2,1,4],
            output: [0,1,1,2,3,4]
        },
        {
            id: 3,
            input: [0,0,0],
            output: [0,0,0]
        },
        {
            id: 4,
            input: [],
            output: 'invalid input'
        },
        {
            id: 5,
            input: [1,'2'],
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
            input: [-10, 3,-4,0],
            output: [-10,-4,0,3]
        },
        {
            id: 11,
            input: [null, 3, [4]],
            output: 'invalid input'
        },
        {
            id: 12,
            input: [3, 0/0],
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = insertionSort(test.input)
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