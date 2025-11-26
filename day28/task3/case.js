import { toSingleObj } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [{key:'a', value: 1}, {key: 'b', value: 2}],
            output: {a:1, b: 2}
        },
        {
            id: 2,
            input: [{key:1, value: 1}, {key: 2, value: 2}],
            output: {1:1, 2: 2}
        },
        {
            id: 3,
            input: [{key:'Greet', value: 'hi'}, {key: 'Numbers', value: [1,2,3,4]}],
            output: {Greet: 'hi', 'Numbers': [1,2,3,4]}
        },
        {
            id: 4,
            input: [{key:[8,9], value: 'hi'}, {key: 'Numbers', value: [1,2,3,4]}],
            output: 'invalid input'
        },
        {
            id: 5,
            input: [{age: 20, value: 'hi'}, {key: 'Numbers', value: [1,2,3,4]}],
            output: 'invalid input'
        },
        {
            id: 6,
            input: [{key: 'a', position: 1}, {key: 'Numbers', value: [1,2,3,4]}],
            output: 'invalid input'
        },
        {
            id: 7,
            input: [{key: 'food', value: 'rice'}, {key: 'juice', value: 'chikku'}],
            output: {food: 'rice', juice: 'chikku'}
        },
        {
            id: 8,
            input: [1,3,5],
            output: 'invalid input'
        },
        {
            id: 9,
            input: null,
            output: 'invalid input'
        },
        {
            id: 10,
            input: 'Hello',
            output: 'invalid input'
        },
        {
            id: 11,
            input: [{key: 'dance', value: 'break'}, {key: 'place', value: 'kerala'}, {key: 'age', value: 21}],
            output: {dance: 'break', place: 'kerala', age: 21}
        },
        {
            id: 12,
            input: undefined,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = toSingleObj(test.input)
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