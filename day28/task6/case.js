import { commonKeys } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: {name: 'Brad', age: 25},
            input2: {name: 'Titan', place: 'mars'},
            output: ['name']
        },
        {
            id: 2,
            input1: {name: 'Brad', place: 'earth'},
            input2: {name: 'Titan', place: 'mars'},
            output: ['name', 'place']
        },
        {
            id: 3,
            input1: {name: 'Brad', age: 25},
            input2: {alien: 'Titan', place: 'mars'},
            output: []
        },
        {
            id: 4,
            input1: {},
            input2: {name: 'Titan', place: 'mars'},
            output: []
        },
        {
            id: 5,
            input1: [],
            input2: {name: 'Titan', place: 'mars'},
            output: 'invalid input'
        },
        {
            id: 6,
            input1: {name: 'Brad', age: 25},
            input2: 4,
            output: 'invalid input'
        },
        {
            id: 7,
            input1: null,
            input2: {name: 'Titan', place: 'mars'},
            output: 'invalid input'
        },
        {
            id: 8,
            input1: {name: 'Brad', place: 'earth'},
            input2: {alien: 'Titan', place: 'mars'},
            output: ['place']
        },
        {
            id: 9,
            input1: {a: 1, b: 3},
            input2: {b: 4, c: 5, d: 6},
            output: ['b']
        },
        {
            id: 10,
            input1: {1: 'Brad', 2: 'John'},
            input2: {1: 1, 3: 'mars'},
            output: ['1']
        },
        {
            id: 11,
            input1: {player: 'Brad', num: 25},
            input2: {name: 'Titan', place: 'mars'},
            output: []
        },
        {
            id: 12,
            input1: {player: 'Brad', num: 25},
            input2: {player: 'Titan', num: 20},
            output: ['player', 'num']
        }
    ]

    testCases.forEach(test => {
        let originalOutput = commonKeys(test.input1, test.input2)
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