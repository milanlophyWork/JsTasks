import { strCompression } from './script.ts'

function testCases(){
    let testCase = [
        {
            id: 1,
            input1: 'aaabbbbcc',
            input2: 'encrypt',
            output: 'a3b4c2'
        },
        {
            id: 2,
            input1: '333bbbbcc',
            input2: 'encrypt',
            output: '33b4c2'
        },
        {
            id: 3,
            input1: 'a3b4c2',
            input2: 'decrypt',
            output: 'aaabbbbcc'
        },
        {
            id: 4,
            input1: '33b4c2',
            input2: 'decrypt',
            output: '333bbbbcc'
        },
        {
            id: 5,
            input1: '333bbbbcc',
            input2: 'hi',
            output: 'invalid input'
        },
        {
            id: 6,
            input1: 4,
            input2: 'encrypt',
            output: 'invalid input'
        },
        {
            id: 7,
            input1: null,
            input2: 'decrypt',
            output: 'invalid input'
        },
        {
            id: 8,
            input1: 'abc',
            input2: 'encrypt',
            output: 'a1b1c1'
        },
        {
            id: 9,
            input1: 'a131c2',
            input2: 'decrypt',
            output: 'a3cc'
        },
        {
            id: 10,
            input1: '',
            input2:'encrypt',
            output: 'invalid input'
        },
        {
            id: 11,
            input1: '333bbbbcc',
            input2: '',
            output: 'invalid input'
        },
        {
            id: 12,
            input1: 'a3bc2',
            input2: 'decrypt',
            output: 'invalid input'
        },
        {
            id: 13,
            input1: 'a334c2',
            input2: 'decrypt',
            output: 'aaa3333cc'
        }
    ]
    testCase.forEach(test => {
        const originalOutput = strCompression(test.input1, test.input2)
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