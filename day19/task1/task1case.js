import { objCheck } from "../../utils/array.js"
import { detectSymmetry } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [[1,2], [2,1]],
            output: {horizontal: true, vertical: true, diagonal: true}
        },
        {
            id: 2,
            input: [[1,2,3], [2,6,5], [3,5,7]],
            output: {horizontal: true, vertical: true, diagonal: true}
        },
        {
            id: 3,
            input: [[1,2], [2]],
            output: 'not a square matrix'
         },
        {
            id: 4,
            input: [[1,2,3], [1,2,3], [1,2,3]],
            output: 'not symmetric'
        },
        {
            id: 5,
            input: [[1]],
            output: {horizontal: true, vertical: true, diagonal: true}
        },
        {
            id: 6,
            input: [[0,0,0], [0,0,0], [0,0,0]],
            output: {horizontal: true, vertical: true, diagonal: true}
        },
        {
            id: 7,
            input: [[3,5,7]],
            output: 'not a square matrix'
        },
        {
            id: 8,
            input: [],
            output: 'invalid input'
        },
        {
            id: 9,
            input: {},
            output: 'invalid input'
        },
        {
            id: 10,
            input: [1,2,3,4],
            output: 'invalid input'
        },
        {
            id: 11,
            input: [[0,2,3], [2,1,5], [3,5,2]],
            output: {horizontal: true, vertical: true, diagonal: true}
        },
        {
            id: 12,
            input: [['1',2,'3'], [2,6,5], [3,5,7]],
            output: 'invalid input'
        },
        {
            id: 13,
            input: 10,
            output: 'invalid input'
        },
        {
            id: 14,
            input: [[1,2,0/0], [2,6,5], [0/0,5,7]],
            output: 'invalid input'
        },
        {
            id: 15,
            input: [[2,3],[12, 3]],
            output: 'not symmetric'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = detectSymmetry(test.input)
        let status = objCheck(originalOutput, test.output)

        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()