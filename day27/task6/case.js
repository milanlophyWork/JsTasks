import { removeFalsy } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,0,2,'',3, undefined, 4],
            output: [1,2,3,4]
        },
        {
            id: 2,
            input: [1,null,2,0/0,3, undefined, 4],
            output: [1,2,3,4]
        },
        {
            id: 3,
            input: [0,'',null, undefined],
            output: []
        },
        {
            id: 4,
            input: [1,'hi',false,'',3, undefined, 4],
            output: [1,'hi',3,4]
        },
        {
            id: 5,
            input: [],
            output: 'invalid input'
        },
        {
            id: 6,
            input: [-1,0,2,'',3, NaN, 4],
            output: [-1,2,3,4]
        },
        {
            id: 7,
            input: [1,2,3,4],
            output: [1,2,3,4]
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
            input: [false, null],
            output: []
        },
        {
            id: 11,
            input: {'a': [4,5]},
            output: 'invalid input'
        },
        {
            id: 12,
            input: [1,0,2,'', [], 4],
            output: [1,2,[],4]
        }
    ]

    testCases.forEach(test => {
        let originalOutput = removeFalsy(test.input)
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