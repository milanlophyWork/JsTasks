import { objDifference } from './script.ts'

function testCases(){
    let testCase = [
        {
            id: 1,
            input1: { x:1, y:2, z:3 },
            input2: { x:1, y:4, w:5 },
            output: {changed: [ {y: [2,4]} ], added:  [{w:5} ], removed: ['z']}
        },
        {
            id: 2,
            input1: 3,
            input2: { x:1, y:4, w:5 },
            output: 'invalid input'
        },
        {
            id: 3,
            input1: { x:1, y:2, z:3 },
            input2: null,
            output: 'invalid input'
        },
        {
            id: 4,
            input1: [1,2,3],
            input2: { x:1, y:4, w:5 },
            output: 'invalid input'
        },
        {
            id: 5,
            input1: {},
            input2: { x:1, y:4, w:5 },
            output: {changed: [], added:  [{x:1},{y:4},{w:5} ], removed: []}
        },
        {
            id: 6,
            input1: { x:1, y:2, z:3 },
            input2: {},
            output: {changed: [], added:  [], removed: ['x','y','z']}
        },
        {
            id: 7,
            input1: {},
            input2: {},
            output: {changed: [], added:  [], removed: []}
        },
        {
            id: 8,
            input1: { x:1, y:2, z:3 },
            input2: { x:1, y:2, z:3 },
            output: {changed: [], added:  [], removed: []}
        },
        {
            id: 9,
            input1: { x:1, y:[2], z:3 },
            input2: { x:1, y:4, w:5 },
            output: {changed: [ {y: [[2],4]} ], added:  [{w:5} ], removed: ['z']}
        },
        {
            id: 10,
            input1: { x:1, y:{a: 2}, z:3 },
            input2: { x:1, y:4, w:5 },
            output: {changed: [ {y: [{a:2},4]} ], added:  [{w:5} ], removed: ['z']}
        },
        
    ]
    testCase.forEach(test => {
        const originalOutput = objDifference(test.input1, test.input2)
        let status = 'passed'
        if(JSON.stringify(test.output) !== JSON.stringify(originalOutput)) status = 'failed'


        let display = `
        test ${test.id} ${status}
        output got: ${originalOutput}
        output expected: ${test.output}
        `

        console.log(display)
    })
}

testCases()