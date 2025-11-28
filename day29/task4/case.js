import { polynomial } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            degree: 3,
            coefficients: [2,-6,2,-1],
            x: 3,
            output: 5
        },
        {
            id: 2,
            degree: 4,
            coefficients: [2,-4,0,0,12],
            x: 2,
            output: 12
        },
        {
            id: 3,
            degree: 0/0,
            coefficients: [2,-6,2,-1],
            x: 3,
            output: 'invalid input'
        },
        {
            id: 4,
            degree: 3,
            coefficients: 4,
            x: 3,
            output: 'invalid input'
        },
        {
            id: 5,
            degree: 3,
            coefficients: [2,-6,2,-1],
            x: '3',
            output: 'invalid input'
        },
        {
            id: 6,
            degree: 3,
            coefficients: [2,-6,2],
            x: 3,
            output: 'Enter correct number of coefficients from higher order to lower order'
        },
        {
            id: 7,
            degree: 3,
            coefficients: [2,-6,2,-1],
            x: null,
            output: 'invalid input'
        },
        {
            id: 8,
            degree: undefined,
            coefficients: [2,-6,2,-1],
            x: 3,
            output: 'invalid input'
        },
        {
            id: 9,
            degree: 3,
            coefficients: [0,0,0,0],
            x: 2,
            output: 0
        },
        {
            id: 10,
            degree: 3,
            coefficients: [2,-6,2,-1],
            x: 1,
            output: -3
        },
        {
            id: 11,
            degree: 3,
            coefficients: [1,-1,0,0],
            x: 2,
            output: 4
        },
        {
            id: 12,
            degree: 3,
            coefficients: [1,-1,0,0],
            x: 1,
            output: 0
        },
    ]

    testCases.forEach(test => {
        let originalOutput = polynomial(test.degree, test.coefficients, test.x)
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