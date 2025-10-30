import {array} from '../../utils/array.js'

let arr = [1,2,3,4,5,6,7,8]
function myMap(arr, callback){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'
    let flag = 0
    const newArray = []

    arr.forEach(item=> {
        if(typeof item !== 'number' || isNaN(item)) flag = 1
        newArray.push(callback(item))
    })
    if(flag === 0)return newArray
    else return 'invalid input'
}
// console.log(myMap([1,2,3],(n)=> n*2))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: arr,
            callback: (n)=> n*2,
            output: [2,4,6,8,10,12,14,16]
        },
        {
            id: 2,
            input: [],
            callback: (n)=> n*2,
            output: 'invalid input'
        },
        {
            id: 3,
            input: {},
            callback: (n)=> n*2,
            output: 'invalid input'
        },
        {
            id: 4,
            input: 2,
            callback: (n)=> n*2,
            output: 'invalid input'
        },
        {
            id: 5,
            input: 1/0,
            callback: (n)=> n*2,
            output: 'invalid input'
        },
        {
            id: 6,
            input: null,
            callback: (n)=> n*2,
            output: 'invalid input'
        },
        {
            id: 7,
            input: ['hi', 'hello'],
            callback: (n)=> n*2,
            output: 'invalid input'
        },
        {
            id: 8,
            input: undefined,
            callback: (n)=> n*2,
            output: 'invalid input'
        },
        {
            id: 9,
            input: [' ', '   ','  '],
            callback: (n)=> n*2,
            output: 'invalid input'
        },
        {
            id: 10,
            input: [1,2,3],
            callback: (n)=> n*2,
            output:[2,4,6]
        },
        {
            id: 11,
            input: [3,4,5],
            callback: (n)=> n%2,
            output: [1,0,1]
        },
        {
            id: 12,
            input: ['15', '1000', '0'],
            callback: (n)=> n*2,
            output: 'invalid input'
        },
        {
            id: 13,
            input: [1/0, 0/0],
            callback: (n)=> n*2,
            output: 'invalid input'
        },
        {
            id: 14,
            input: [0, 1],
            callback: (n)=> n*2,
            output: [0, 2]
        },
        {
            id: 15,
            input: false,
            callback: (n)=> n*2,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = myMap(test.input, test.callback)
        let status = array(originalOutput, test.output)

        let display = `
        Testcase ${test.id} ${status}
        Expected output : ${test.output}
        Output got : ${originalOutput}
        `
        console.log(display)
    })
}

testCase()