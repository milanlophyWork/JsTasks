import { toCamelCase } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: 'hello_world_from_js',
            output: 'helloWorldFromJs'
        },
        {
            id: 2,
            input: 'hello world from js',
            output: 'invalid input'
        },
        {
            id: 3,
            input: 'hello__world_from_js',
            output: 'invalid input'
        },
        {
            id: 4,
            input: '',
            output: 'invalid input'
        },
        {
            id: 5,
            input: [],
            output: 'invalid input'
        },
        {
            id: 6,
            input: {'1': 'hi'},
            output: 'invalid input'
        },
        {
            id: 7,
            input: '1234',
            output: '1234'
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: '_hai',
            output: 'invalid input'
        },
        {
            id: 10,
            input: 'Hello',
            output: 'hello'
        },
        {
            id: 11,
            input: 'How_old_are_you_?',
            output: 'howOldAreYou?'
        },
        {
            id: 12,
            input: '1234_5678',
            output: '12345678'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = toCamelCase(test.input)
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