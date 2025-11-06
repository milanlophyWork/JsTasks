import { array } from "../../utils/array.js"

function interpretAdd(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    for(let item of arr) {
        if(typeof item !== 'number' || isNaN(item) || item < 0 || Math.round(item) !== item) return 'invalid input' 
    }

    let interpretNum = Number(arr.join('')) + 1
  
    let newArr = []
    for(let digit of String(interpretNum)){
        newArr.push(Number(digit))
    }
    return newArr
}
// console.log(interpretAdd([1,2,3]))
// console.log(interpretAdd([9]))


function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3,4,5],
            output: [1,2,3,4,6]
        },
        {
            id: 2,
            input: [9],
            output:[1,0]
        },
        {
            id: 3,
            input: [0,1,2,3,14,5],
            output: [1,2,3,1,4,6]
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
            output: 'invalid input'
        },
        {
            id: 11,
            input: [0,7,0,3,5],
            output: [7,0,3,6]
        },
        {
            id: 12,
            input: [0],
            output: [1]
        },
        {
            id: 13,
            input: true,
            output: 'invalid input'
        },
        {
            id: 14,
            input: [-1,-4,8],
            output: 'invalid input'
        },
        {
            id: 15,
            input: [5, 12/6],
            output: [5,3]
        }
    ]

    testCases.forEach(test => {
        let originalOutput = interpretAdd(test.input)
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