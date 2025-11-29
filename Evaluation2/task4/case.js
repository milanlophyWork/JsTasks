import { templateParser } from './script.ts'

function testCases(){
    let testCase = [
        {
            id: 1,
            input1: 'Hello {{name}}, you have {{count}} new messages.',
            input2: { name: "John", count: 3 },
            output: 'Hello John, you have 3 new messages.'
        },
         {
            id: 2,
            input1: 'Hello {{name}} you have {{count}} new messages.',
            input2: { name: "John", count: 3 },
            output: 'Hello John you have 3 new messages.'
        },
         {
            id: 3,
            input1: 'Hello {{myName}}, you have {{count}} new messages.',
            input2: { name: "John", count: 3 },
            output: 'Hello {{myName}}, you have 3 new messages.'
        },
         {
            id: 4,
            input1: 3,
            input2: { name: "John", count: 3 },
            output: 'invalid input'
        },
         {
            id: 5,
            input1: 'Hello {{name}}, you have {{count}} new messages.',
            input2: null,
            output: 'invalid input'
        },
         {
            id: 6,
            input1: '',
            input2: { name: "John", count: 3 },
            output: 'invalid input'
        },
        {
            id: 7,
            input1: 'My name is {{name}}',
            input2: { name: "John", count: 3 },
            output: 'My name is John'
        },
        {
            id: 8,
            input1: 'I am {{age}} years old',
            input2: {},
            output: 'I am {{age}} years old'
        },
        {
            id: 9,
            input1: 'I am {{age}} years old',
            input2: { name: "John", age: 3 },
            output: 'I am 3 years old'
        },
        {
            id: 10,
            input1: 'I am age years old',
            input2: { name: "John", age: 3 },
            output: 'I am age years old'
        },
        
    ]
    testCase.forEach(test => {
        const originalOutput = templateParser(test.input1, test.input2)
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