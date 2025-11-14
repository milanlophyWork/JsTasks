import { deepCheck } from "../../utils/array.js"

function uniqueNum(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'
    let count = {}
    let newArr = []

    for(let item of arr){
        if(typeof item !== 'number' || isNaN(item)) return 'invalid input'
        count[item] = (count[item] || 0) + 1
    }
    Object.keys(count).forEach(key => {
        if(count[key] !== 2){
            newArr.push(key)
        }
    })

    if(newArr.length > 1) return 'invalid input'
    else if(newArr.length === 0) return 'no single unique number'
    else return Number(newArr[0])
}
// console.log(uniqueNum([1,3,2,3,1,4,2]))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3,4,5],
            output: 'invalid input'
        },
        {
            id: 2,
            input: ['', 'hello'],
            output: 'invalid input'
        },
        {
            id: 3,
            input: [0,0,2,3,2,3],
            output: 'no single unique number'
         },
        {
            id: 4,
            input: {},
            output: 'invalid input'
        },
        {
            id: 5,
            input: [0/0, 2,2],
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
            input: [0,4,0,3,4],
            output: 3
        },
        {
            id: 10,
            input: [-4, 3, 3],
            output: -4
        },
        {
            id: 11,
            input: [0,3,0.1,3,0],
            output: 0.1
        },
        {
            id: 12,
            input: [1/2, 4, 4, 1/2],
            output: 'no single unique number'
        },
        {
            id: 13,
            input: [-4, -2,-4, -3,-2],
            output: -3
        },
        {
            id: 14,
            input: ['3', '2', 3, 0, 2],
            output: 'invalid input'
        },
        {
            id: 15,
            input: [0,3,2,3,3,2],
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = uniqueNum(test.input)
        let status = deepCheck(originalOutput, test.output)
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()