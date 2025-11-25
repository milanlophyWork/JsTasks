import { intersection } from './script.ts'

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: [1,2,3,4,5,6],
            input2: [2,3,4],
            output: [2,3,4]
        },
        {
            id: 2,
            input1: [1,2,3],
            input2: [2,3,4],
            output: [2,3]
        },
        {
            id: 3,
            input1: [1,2,3,4,5,6],
            input2: [14, 15],
            output: []
        },
        {
            id: 4,
            input1: [1,2,3],
            input2: [1,2,3],
            output: [1,2,3]
        },
        {
            id: 5,
            input1: [],
            input2: [2,3,4],
            output: []
        },
        {
            id: 6,
            input1: [],
            input2: [],
            output: 'invalid input'
        },
        {
            id: 7,
            input1: [1,'2',3,[4],5,6],
            input2: ['2',3,[4]],
            output: ['2',3,[4]]
        },
        {
            id: 8,
            input1: undefined,
            input2: [2,3,4],
            output: 'invalid input'
        },
        {
            id: 9,
            input1: [1,2,3,4,5,6],
            input2: null,
            output: 'invalid input'
        },
        {
            id: 10,
            input1: ['hello', 'hi'],
            input2: ['hi'],
            output: ['hi']
        },
        {
            id: 11,
            input1: {'a': [4,5]},
            input2: [2,3,4],
            output: 'invalid input'
        },
        {
            id: 12,
            input1: [{'a': 1}],
            input2: [8],
            output: []
        }
    ]

    testCases.forEach(test => {
        let originalOutput = intersection(test.input1, test.input2)
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