import { checkSort } from "./script.ts";

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3,4,5,6,7,8,9],
            output: 'ascending'
        },
        {
            id: 2,
            input: [5,4,3,2,1],
            output: 'descending'
        },
        {
            id: 3,
            input: [1,3,5,7,9],
            output: 'ascending'
        },
        {
            id: 4,
            input: [5,4,1],
            output: 'descending'
        },
        {
            id: 5,
            input: [],
            output: 'invalid input'
        },
        {
            id: 6,
            input: [1,3,2,0],
            output: 'unsorted'
        },
        {
            id: 7,
            input: [30,34,50],
            output: 'ascending'
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
            input: [-3,-4,-6],
            output: 'descending'
        },
        {
            id: 11,
            input: [40,20,20, 10],
            output: 'descending'
        },
        {
            id: 12,
            input: [-2,-1,0],
            output: 'ascending'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = checkSort(test.input)
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