import {twoArrays} from './script.ts'

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: [1,2,3,4,5],
            input2: [6,7,8,9],
            output: 'No common elements'
        },
        {
            id: 2,
            input1: [1,2,3,4,5],
            input2: [3,5,0,2],
            output: [2,3,5]
        },
        {
            id: 3,
            input1: [0,0,0],
            input2: [0,0,1],
            output: [0]
         },
        {
            id: 4,
            input1: [],
            input2: [6,7,8,9],
            output: 'No common elements'
        },
        {
            id: 5,
            input1: [],
            input2: [],
            output: 'No common elements'
        },
        {
            id: 6,
            input1: null,
            input2: [1,2],
            output: 'invalid input'
        },
        {
            id: 7,
            input1: 1,
            input2: 6,
            output: 'invalid input'
        },
        {
            id: 8,
            input1: undefined,
            input2: [6,7,8,9],
            output: 'invalid input'
        },
        {
            id: 9,
            input1: ['1',2,'3',4,5],
            input2: [2,3],
            output: [2]
        },
        {
            id: 10,
            input1: ['hi',2,4, 'mrng',0],
            input2: [0,'mrng', 3],
            output: ['mrng', 0]
        },
        {
            id: 11,
            input1: {'a': 1},
            input2: [6,7,8,9],
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = twoArrays(test.input1, test.input2)
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