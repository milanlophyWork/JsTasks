import { array } from "../../utils/array.js"
import { sortByScoreRank } from "./script.ts"

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3],
            output: [{score: 3, rank: 1}, {score: 2, rank: 2}, {score: 1, rank: 3}]
        },
        {
            id: 2,
            input: [100, 100, 90, 80],
            output: [{score: 100, rank: 1}, {score: 100, rank: 1}, {score: 90, rank: 2}, {score: 80, rank: 3}]
        },
        {
            id: 3,
            input: [30, 20, 15, 20, 15],
            output: [{score: 30, rank: 1}, {score: 20, rank: 2}, {score: 20, rank: 2}, {score: 15, rank: 3}, {score: 15, rank: 3}]
         },
        {
            id: 4,
            input: [10, 10],
            output: [{score: 10, rank: 1}, {score: 10, rank: 1}]
        },
        {
            id: 5,
            input: [10],
            output: [{score: 10, rank: 1}]
        },
        {
            id: 6,
            input: [],
            output: 'invalid input'
        },
        {
            id: 7,
            input: 40,
            output: 'invalid input'
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
            input: [0, 2],
            output: [{score: 2, rank: 1}, {score: 0, rank: 2}]
        },
        {
            id: 11,
            input: [-3, -5],
            output: [{score: -3, rank: 1}, {score: -5, rank: 2}]
        },
        {
            id: 12,
            input: [8, 0/0],
            output: 'invalid input'
        },
        {
            id: 13,
            input: [20, 40/2, 21.5],
            output: [{score: 21.5, rank: 1}, {score: 20, rank: 2}, {score: 20, rank: 2}]
        },
        {
            id: 14,
            input: null,
            output: 'invalid input'
        },
        {
            id: 15,
            input: undefined,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = sortByScoreRank(test.input)
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