import { array } from "../../utils/array.js"

function removeFalsy(arr){
    if(!Array.isArray(arr) || arr.length===0) return 'invalid input'

    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i]){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeFalsy([54, false, null, 9, 'HI', 0]))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3,4,5],
            output: [1,2,3,4,5]
        },
        {
            id: 2,
            input: ['', 'hello'],
            output: [ 'hello']
        },
        {
            id: 3,
            input: [0,0,undefined,0],
            output: []
         },
        {
            id: 4,
            input: {},
            output: 'invalid input'
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
            output: 'invalid input'
        },
        {
            id: 10,
            input: [1,0/0,3],
            output: [1,3]
        },
        {
            id: 11,
            input: [54, false, null, 9, 'HI', 0/0],
            output: [54, 9, 'HI']
        },
        {
            id: 12,
            input: [[1]],
            output: [[1]]
        },
        {
            id: 13,
            input: true,
            output: 'invalid input'
        },
        {
            id: 14,
            input: [{'val': 1.4}, 0, 1.1],
            output: [{'val': 1.4}, 1.1]
        },
        {
            id: 15,
            input: [0.5, 1/2],
            output: [0.5, 0.5]
        }
    ]

    testCases.forEach(test => {
        let originalOutput = removeFalsy(test.input)
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