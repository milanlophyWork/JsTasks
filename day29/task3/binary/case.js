import { binarySearch } from "./binary.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: [1,2,3,4],
            input2: 3,
            output: 'element 3 found at index 2'
        },
        {
            id: 2,
            input1: [2,4,1,3],
            input2: 0,
            output: 'insert an array sorted in ascending order'
        },
        {
            id: 3,
            input1: [3,4,10,12,12,13],
            input2: 12,
            output: 'element 12 found at index 3'
        },
        {
            id: 4,
            input1: [3,4,10,12,12,13],
            input2: 9,
            output: 'element not found'
        },
        {
            id: 5,
            input1: [],
            input2: 12,
            output: 'invalid input'
        },
        {
            id: 6,
            input1: {'a':1},
            input2: 12,
            output: 'invalid input'
        },
        {
            id: 7,
            input1: 50,
            input2: 12,
            output: 'invalid input'
        },
        {
            id: 8,
            input1: undefined,
            input2: 12,
            output: 'invalid input'
        },
        {
            id: 9,
            input1: null,
            input2: 12,
            output: 'invalid input'
        },
        {
            id: 10,
            input1: [-10,-4, 0, 3],
            input2: -4,
            output: 'element -4 found at index 1'
        },
        {
            id: 11,
            input1: [null, 3, [4]],
            input2: 12,
            output: 'invalid input'
        },
        {
            id: 12,
            input1: [3, 0/0],
            input2: 12,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = binarySearch(test.input1, test.input2)
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