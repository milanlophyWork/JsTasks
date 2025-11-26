import { sumOfUniqueNum } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3,2],
            output: 4
        },
        {
            id: 2,
            input: [1,2,3,2,5],
            output: 9
        },
        {
            id: 3,
            input: [],
            output: 'invalid input'
        },
        {
            id: 4,
            input: 'hello',
            output: 'invalid input'
        },
        {
            id: 5,
            input: [1,2,3],
            output: 6
        },
        {
            id: 6,
            input: [1,1,1],
            output: 0
        },
        {
            id: 7,
            input: {a: 4},
            output: 'invalid input'
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: [0,0,1],
            output: 1
        },
        {
            id: 10,
            input: [3 , 5, [8]],
            output: 'invalid input'
        },
        {
            id: 11,
            input: [-7, 9],
            output: 2
        },
        {
            id: 12,
            input: [0/0, 8],
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = sumOfUniqueNum(test.input)
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