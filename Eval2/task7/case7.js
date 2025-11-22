import { validEmail } from "./script.ts"

function testCases(){
    let testCase = [
        {
            id: 1,
            input: ['test@mail.com', 'abc@', 'ok@gmail.com'],
            output: ['test@mail.com', 'ok@gmail.com']
        },
        {
            id: 2,
            input: ['mi1@gmail.com', 'abc@', 'o#k@gmail.com'],
            output: ['mi1@gmail.com']
        },
        {
            id: 3,
            input: [1,2,3],
            output: 'invalid input'
        },
        {
            id: 4,
            input: 5,
            output: 'invalid input'
        },
        {
            id: 5,
            input: [],
            output: 'invalid input'
        },
        {
            id: 6,
            input: {},
            output: 'invalid input'
        },
        {
            id: 7,
            input: 'hi',
            output: 'invalid input'
        },
        {
            id: 8,
            input: true,
            output: 'invalid input'
        },
        {
            id: 9,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 10,
            input: null,
            output: 'invalid input'
        },
        {
            id: 11,
            input: ['Mil@gmail.com', 'mil@@gmail.com', '@gmail.com', 'mil@gmail.c'],
            output: ['Mil@gmail.com']
        },
        {
            id: 12,
            input: [''],
            output: 'invalid input'
        },
    ]

    testCase.forEach(test => {
        let status = 'passed'
        let originalOutput = validEmail(test.input)

        if(JSON.stringify(originalOutput) !== JSON.stringify(test.output)) status = 'failed'
       
        console.log(`Testcase ${test.id} ${status}`)
    })
}
testCases()