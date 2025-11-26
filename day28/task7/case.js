import { toObj } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: '?name=John&age=20&active=true',
            output: {name: 'John', age: '20', active: 'true'}
        },
        {
            id: 2,
            input: 'name=John&age=20&active=true',
            output: {name: 'John', age: '20', active: 'true'}
        },
        {
            id: 3,
            input: '?name=John',
            output: {name: 'John'}
        },
        {
            id: 4,
            input: '?nameJohn',
            output: 'invalid input'
        },
        {
            id: 5,
            input: '?=',
            output: 'invalid input'
        },
        {
            id: 6,
            input: '?name=',
            output: 'invalid input'
        },
        {
            id: 7,
            input: 'name=',
            output: 'invalid input'
        },
        {
            id: 8,
            input: [1,2],
            output: 'invalid input'
        },
        {
            id: 9,
            input: 1,
            output: 'invalid input'
        },
        {
            id: 10,
            input: {a: 1},
            output: 'invalid input'
        },
        {
            id: 11,
            input: null,
            output: 'invalid input'
        },
        {
            id: 12,
            input: undefined,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = toObj(test.input)
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