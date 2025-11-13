import { nestedArr } from "../../utils/array.js"
import { sortMixedNested } from "./script.ts"

function testCase(){
    let testCases = [
        {
            id: 1,
            input: [3,[2, [5,1]], 4],
            output: [1,[2, [3,4]],5]
        },
        {
            id: 2,
            input: [3,2,5,1,4],
            output: [1,2,3,4,5]
        },
        {
            id: 3,
            input: [3,[2, [5,[1]]], 4],
            output: [1,[2, [3,[4]]],5]
        },
        {
            id: 4,
            input: [1,[1, [1,1]], 1],
            output: [1,[1, [1,1]],1]
        },
        {
            id: 5,
            input: [1,[2, [3,4]], 5],
            output: [1,[2, [3,4]],5]
        },
        {
            id: 6,
            input: [0,[2, [0,1]], 0],
            output: [0,[0, [0,1]],2]
        },
        {
            id: 7,
            input: [-3,[2,[], [-5,1]], 4],
            output: [-3,[-5,[], [1,2]],4]
        },
        {
            id: 8,
            input: {},
            output: 'invalid input'
        },
        {
            id: 9,
            input: '50',
            output: 'invalid input'
        },
        {
            id: 10,
            input: null,
            output: 'invalid input'
        },
        {
            id: 11,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 12,
            input: 4,
            output: 'invalid input'
        },
        {
            id: 13,
            input: [],
            output: 'invalid input'
        },
        {
            id: 14,
            input: true,
            output: 'invalid input'
        },
        {
            id: 15,
            input: [-3,['2',[], [-5,1]], 4],
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = sortMixedNested(test.input)
        let status = nestedArr(originalOutput, test.output)

        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()