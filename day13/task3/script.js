import { array } from "../../utils/array.js"

function factorial(n){
    if(typeof n !== 'number' || isNaN(n) || n<0 || Math.round(n)!==n) return 'invalid input'

    if(n===0 || n===1){
        return 1
    }else{
        return n * factorial(n-1)
    }
}
console.log(factorial(5))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: '',
            output: 'invalid input'
        },
        {
            id: 2,
            input: -5,
            output: 'invalid input'
        },
        {
            id: 3,
            input: {},
            output: 'invalid input'
         },
        {
            id: 4,
            input: 5,
            output: 120
        },
        {
            id: 5,
            input: 0/0,
            output: 'invalid input'
        },
        {
            id: 6,
            input: null,
            output: 'invalid input'
        },
        {
            id: 7,
            input: [],
            output: 'invalid input'
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: 3, 
            output: 6
        },
        {
            id: 10,
            input: 10/2,
            output: 120
        },
        {
            id: 11,
            input: 6,
            output: 720
        },
        {
            id: 12,
            input: 1,
            output: 1
        },
        {
            id: 13,
            input: false,
            output: 'invalid input'
        },
        {
            id: 14,
            input: 0,
            output: 1
        },
        {
            id: 15,
            input: 1.2,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = factorial(test.input)
        let status = array(originalOutput, test.output)
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()