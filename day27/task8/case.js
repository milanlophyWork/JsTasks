import { toQueryStr } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: {name:'John', age: 30},
            output: 'name=John&age=30'
        },
        {
            id: 2,
            input: {name:'John', age: 30, job: 'teacher'},
            output: 'name=John&age=30&job=teacher'
        },
        {
            id: 3,
            input: ['name', 'john'],
            output: 'invalid input'
        },
        {
            id: 4,
            input: 'hi',
            output: 'invalid input'
        },
        {
            id: 5,
            input: {'5':5},
            output: '5=5'
        },
        {
            id: 6,
            input: {'hi': [1,2,3]},
            output: 'hi=[1,2,3]'
        },
        {
            id: 7,
            input: {name: 'John', luckyNum : [3,7]},
            output: 'name=John&luckyNum=[3,7]'
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
            input: true,
            output: 'invalid input'
        },
        {
            id: 11,
            input: {'a': [4,5]},
            output: 'a=[4,5]'
        },
        // {
        //     id: 12,
        //     input: {name: {first: 'John', last: 'Cruise'}},
        //     output: 'name=first'
        // }
    ]

    testCases.forEach(test => {
        let originalOutput = toQueryStr(test.input)
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