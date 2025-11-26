import { replaceNum } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: 'Room 45 on floor 3',
            output: 'Room ## on floor #'
        },
        {
            id: 2,
            input: '1234',
            output: '####'
        },
        {
            id: 3,
            input: 1,
            output: 'invalid input'
        },
        {
            id: 4,
            input: null,
            output: 'invalid input'
        },
        {
            id: 5,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 6,
            input: 'from 0 to 1000',
            output: 'from # to ####'
        },
        {
            id: 7,
            input: 'welcome to ooty',
            output: 'welcome to ooty'
        },
        {
            id: 8,
            input: [1,2],
            output: 'invalid input'
        },
        {
            id: 9,
            input: true,
            output: 'invalid input'
        },
        {
            id: 10,
            input: {a: 1},
            output: 'invalid input'
        },
        {
            id: 11,
            input: 'R00m 45 0n fl00r 3',
            output: 'R##m ## #n fl##r #'
        },
        {
            id: 12,
            input: '1234 4321',
            output: '#### ####'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = replaceNum(test.input)
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