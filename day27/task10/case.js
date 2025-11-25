import { deepEqual } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: {name:'John', age: 30},
            input2: {name: 'John', age: 30},
            output: true
        },
        {
            id: 2,
            input1: {a:1, b: 30},
            input2: {name: 'John', age: 30},
            output: false
        },
        {
            id: 3,
            input1: 23,
            input2: 21,
            output: false
        },
        {
            id: 4,
            input1: 'hi',
            input2: 'hi',
            output: true
        },
        {
            id: 5,
            input1: [1,2,3],
            input2: [1,2,3],
            output: true
        },
        {
            id: 6,
            input1: [1,2,'3'],
            input2: [1,2,3],
            output: false
        },
        {
            id: 7,
            input1: {b: [1]},
            input2: {b: [2]},
            output: false
        },
        {
            id: 8,
            input1: {b: [1]},
            input2: {b: [2,3]},
            output: false
        },
        {
            id: 9,
            input1: null,
            input2: null,
            output: true
        },
        {
            id: 10,
            input1: null,
            input2: {b: [2]},
            output: false
        },
        {
            id: 11,
            input1: [1,2,3],
            input2: {b: [2]},
            output: false
        },
        {
            id: 12,
            input1: {a: 1, b:{c:2}},
            input2: {a: 1, b:{c:2}},
            output: true
        },
        {
            id: 13,
            input1: {a: 1, b:{c:2}},
            input2: {a: 1, b:{c:3}},
            output: false
        },
    ]

    testCases.forEach(test => {
        let originalOutput = deepEqual(test.input1, test.input2)
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