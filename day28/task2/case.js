import { rotateByK } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: [1,2,3,4,5],
            k: 2,
            output: [4,5,1,2,3]
        },
        {
            id: 2,
            input1: [1,2,3,4,5],
            k: 3,
            output: [3,4,5,1,2]
        },
        {
            id: 3,
            input1: [1,2,3,4,5],
            k: 6,
            output: 'invalid input'
        },
        {
            id: 4,
            input1: [1,2,3,4,5],
            k: 0,
            output: 'invalid input'
        },
        {
            id: 5,
            input1: [1,2,3,4,5],
            k: 5,
            output: 'invalid input'
        },
        {
            id: 6,
            input1: [1,2,3,4,5],
            k: -3,
            output: 'invalid input'
        },
        {
            id: 7,
            input1: [1,2,3,4,5,6],
            k: 4,
            output: [3,4,5,6,1,2,]
        },
        {
            id: 8,
            input1: [],
            k: 4,
            output: 'invalid input'
        },
        {
            id: 9,
            input1: 'Hello',
            k: 4,
            output: 'invalid input'
        },
        {
            id: 10,
            input1: [1,2,'3',4,[5],6],
            k: 2,
            output: [[5],6,1,2,'3',4]
        },
        {
            id: 11,
            input1: [1,2,{'a': 4},4,5,6],
            k: 1,
            output: [6,1,2,{'a':4},4,5]
        },
        {
            id: 12,
            input1: [1,null,3,4,false,6],
            k: 4,
            output: [3,4,false,6,1,null]
        }
    ]

    testCases.forEach(test => {
        let originalOutput = rotateByK(test.input1, test.k)
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