import { vowelCount } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: 'Hello All, welcOmE!',
            output: 6
        },
        {
            id: 2,
            input: 'aeiouAEIOU',
            output: 10
        },
        {
            id: 3,
            input: 'xyz',
            output: 0
        },
        {
            id: 4,
            input: '123',
            output: 0
        },
        {
            id: 5,
            input: [],
            output: 'invalid input'
        },
        {
            id: 6,
            input: '',
            output: 'invalid input'
        },
        {
            id: 7,
            input: true,
            output: 'invalid input'
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
            input: 'aeiou are called vowels!',
            output: 11
        },
        {
            id: 11,
            input: {'a': [4,5]},
            output: 'invalid input'
        },
        {
            id: 12,
            input: 'Hai  Hello',
            output: 4
        }
    ]

    testCases.forEach(test => {
        let originalOutput = vowelCount(test.input)
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