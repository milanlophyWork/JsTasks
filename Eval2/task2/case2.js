import { groupAnagrams } from "./script.ts"

function testCases(){
    let testCase = [
        {
            id: 1,
            input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
            output: [['eat', 'tea', 'ate'], ['tan','nat'], ['bat']]
        },
        {
            id: 2,
            input: ['eat', 'tan'],
            output: [['eat'], ['tan']]
        },
        {
            id: 3,
            input: [1,2,'hi'],
            output: 'invalid input'
        },
        {
            id: 4,
            input: 5,
            output: 'invalid input'
        },
        {
            id: 5,
            input: [],
            output: 'invalid input'
        },
        {
            id: 6,
            input: {},
            output: 'invalid input'
        },
        {
            id: 7,
            input: 'hi',
            output: 'invalid input'
        },
        {
            id: 8,
            input: true,
            output: 'invalid input'
        },
        {
            id: 9,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 10,
            input: null,
            output: 'invalid input'
        },
        {
            id: 11,
            input: [['', '']],
            output: 'invalid input'
        },
        {
            id: 12,
            input: [['hi', '']],
            output: 'invalid input'
        },
    ]

    testCase.forEach(test => {
        let status = 'passed'
        let originalOutput = groupAnagrams(test.input)

        if(JSON.stringify(originalOutput) !== JSON.stringify(test.output)) status = 'failed'
       
        console.log(`Testcase ${test.id} ${status}`)
    })
}
testCases()