import { array } from "../../utils/array.js"

// Rearrange numbers by parity
function rearranging(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'
    let flag = 0

    let even=[]
    let odd = []

    arr.forEach(item=> {
        if(typeof item !== 'number' || isNaN(item)) flag = 1
        item%2===0 ? 
        even.push(item): odd.push(item)
    })
    return flag === 0 ? [even,odd].flat() : 'invalid input'
}
// console.log(rearranging([3,2,4,1,5,8]))

function testCase(){

    const testCases = [
        {
            id: 1,
            input: '',
            output: 'invalid input'
        },
        {
            id: 2,
            input: [],
            output: 'invalid input'
        },
        {
            id: 3,
            input: {},
            output: 'invalid input'
        },
        {
            id: 4,
            input: 2,
            output: 'invalid input'
        },
        {
            id: 5,
            input: [0/0],
            output: 'invalid input'
        },
        {
            id: 6,
            input: null,
            output: 'invalid input'
        },
        {
            id: 7,
            input: [1,2,3,4,5],
            output: [2,4,1,3,5]
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: [' ', '   ','  '],
            output: 'invalid input'
        },
        {
            id: 10,
            input: ['Programming', 'is','Fun'],
            output:'invalid input'
        },
        {
            id: 11,
            input: [2,4,6,8],
            output: [2,4,6,8]
        },
        {
            id: 12,
            input: ['15', '1000', '0'],
            output: 'invalid input'
        },
        {
            id: 13,
            input: [1,3,5,7],
            output: [1,3,5,7]
        },
        {
            id: 14,
            input: [0,0,0],
            output: [0,0,0]
        },
        {
            id: 15,
            input: false,
            output: 'invalid input'
        }
    ]

    testCases.forEach((test,index) => {
        let originalOutput = rearranging(test.input)
        let status = array(originalOutput, test.output)
        
        let display = `
        Testcase ${index+1} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()