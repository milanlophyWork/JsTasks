import { findAvailableSeats } from "./script.ts"
import { array } from "../../utils/array.js"

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: [[1,0,1], [0,0,1], [1,0,0]],
            input2: 2,
            output: [[1,0], [2,1]]
        },
        {
            id: 2,
            input1: [[1,0,1], [0,0,1], [1,0,0]],
            input2: 0,
            output: 'invalid input'
        },
        {
            id: 3,
            input1: [[1,0,1], [0,0,1], [1,0,0]],
            input2: 1,
            output: [[0,1], [1,0], [1,1], [2,1], [2,2]]
         },
        {
            id: 4,
            input1: [[1,0,1], [0,0,1], [1,0,0]],
            input2: 3,
            output: '3 seats not available'
        },
        {
            id: 5,
            input1: [[1,0,1], [0,0], [1,0,0]],
            input2: 2,
            output: 'not a square matrix'
        },
        {
            id: 6,
            input1: [1,2,3],
            input2: 2,
            output: 'invalid input'
        },
        {
            id: 7,
            input1: {},
            input2: 2,
            output: 'invalid input'
        },
        {
            id: 8,
            input1: 3,
            input2: 2,
            output: 'invalid input'
        },
        {
            id: 9,
            input1: 'hi',
            input2: 2,
            output: 'invalid input'
        },
        {
            id: 10,
            input1: [['1','0','1'], [0,0,1], [1,0,0]],
            input2: 2,
            output: 'invalid input'
        },
        {
            id: 11,
            input1: null,
            input2: 2,
            output: 'invalid input'
        },
        {
            id: 12,
             input1: undefined,
            input2: 2,
            output: 'invalid input'
        },
        {
            id: 13,
            input1: true,
            input2: 2,
            output: 'invalid input'
        },
        {
            id: 14,
            input1: [[1]],
            input2: 1,
            output: '1 seats not available'
        },
        {
            id: 15,
            input1: [[1,1]],
            input2: 1,
            output: 'not a square matrix'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = findAvailableSeats(test.input1, test.input2)
        let status 

        if(Array.isArray(originalOutput)){
            for(let i=0; i<originalOutput.length; i++){
                if(Array.isArray(originalOutput[i])){
                    status = array(originalOutput[i], test.output[i])
                }
            }
        }else status = array(originalOutput, test.output)

        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()