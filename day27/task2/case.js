import { frequentItem } from "./script.ts";

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3,4,5,6,7,8,9],
            output: 1
        },
        {
            id: 2,
            input: [1,2,9,3,9,2,9,3],
            output: 9
        },
        {
            id: 3,
            input: [1,2,3],
            output: 1
        },
        {
            id: 4,
            input: [1,2,1,2,1,2],
            output: 1
        },
        {
            id: 5,
            input: [],
            output: 'invalid input'
        },
        {
            id: 6,
            input: [1,'2',0,2, 2, '2'],
            output: 'invalid input'
        },
        {
            id: 7,
            input: [1],
            output: 1
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
            input: {'1':1},
            output: 'invalid input'
        },
        {
            id: 11,
            input: 'hello',
            output: 'invalid input'
        },
        {
            id: 12,
            input: true,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = frequentItem(test.input)
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