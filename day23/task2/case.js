import { buildObj } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: 'name=John&age=20',
            output: {name:'John', age: '20'}
        },
        {
            id: 2,
            input: 'nameJohn&age=20',
            output: 'invalid input'
        },
        {
            id: 3,
            input: 'name=John',
            output: {name:'John'}
         },
        {
            id: 4,
            input: 'na&me=John&age=20',
            output: 'invalid input'
        },
        {
            id: 5,
            input: 'name=John&age=20&job=developer',
            output: {name:'John', age: '20', job: 'developer'}
        },
        {
            id: 6,
            input: 'name=John&age:20',
            output: 'invalid input'
        },
        {
            id: 7,
            input: 'name=John&&age=20',
            output: 'invalid input'
        },
        {
            id: 8,
            input: [],
            output: 'invalid input'
        },
        {
            id: 9,
            input: 3,
            output: 'invalid input'
        },
        {
            id: 10,
            input: '',
            output: 'invalid input'
        },
        {
            id: 11,
            input: undefined,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = buildObj(test.input)
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