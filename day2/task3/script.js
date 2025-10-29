import { array } from "../../utils/array.js"

function evenArray(arr){
    if(!Array.isArray(arr) || arr.length ===0) return 'invalid input'
    let even = []
    arr.forEach(item => {
        if(typeof item === 'number' && item !== 0){
            if(item%2 === 0){
                even.push(item)
            }
        }
    })
    return even
}

// console.log(evenArray([1,2,3,4,5,6]))
// console.log(evenArray([7,8,9,10,11,12]))
// console.log(evenArray([2,4,6,8,10]))

const testCases = [
    {
        id: 1,
        input: [],
        output: 'invalid input'
    },
    {
        id: 2,
        input: 3,
        output: 'invalid input'
    },
    {
        id: 3,
        input: ' ',
        output: 'invalid input'
    },
    {
        id: 4,
        input: {},
        output: 'invalid input'
    },
    {
        id: 5,
        input: null,
        output: 'invalid input'
    },
    {
        id: 6,
        input: undefined,
        output: 'invalid input'
    },
    {
        id: 7,
        input: [1,2,3,4.2,5,6],
        output: [2,6]
    },
    {
        id: 8,
        input: [3,5,7,9],
        output: []
    },
    {
        id: 9,
        input: true,
        output: 'invalid input'
    },
    {
        id: 10,
        input: false,
        output: 'invalid input'
    },
    {
        id: 11,
        input: ['Hi', 1,2,3,4],
        output: [2,4]
    },
    {
        id: 12,
        input: [false, 'hello', [3, 2], {} ],
        output: []
    },
    {
        id: 13,
        input: [-1, -2, 0,-3],
        output: [-2]
    },
    {
        id: 14,
        input: [2,4,6,8,10],
        output: [2,4,6,8,10]
    },
    {
        id: 15,
        input: [0,0,0,0,0],
        output: []
    },
]

testCases.forEach(testCase => {
    let originalOutput = evenArray(testCase.input)
    let status = array(originalOutput, testCase.output)
    /* if(Array.isArray(originalOutput)){
        if(originalOutput.length === testCase.output.length){
                  
            for(let i=0; i<originalOutput.length;i++){
                if(originalOutput[i] !== testCase.output[i]){
                    status = 'failed' 
                    break
                }
            }
        }else status = 'failed'
    }else{
        status = originalOutput === testCase.output ? 'Passed' : 'Failed'
    } */

    let display = `
    Testcase ${testCase.id} ${status}
    Output Expected : ${testCase.output}
    Output Got : ${originalOutput}
        `
    console.log(display)
  
}) 
    