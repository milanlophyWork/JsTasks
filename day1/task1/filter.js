import {array} from '../../utils/array.js'

let arr = [1,2,3,4,5,6,7,8]
function MyFilter(arr, callback){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'
    let flag = 0
    const newArray = []

    arr.forEach(item => {
        if(typeof item === 'number' && isNaN(item)) flag = 1
        // if(typeof item === 'string' && !item.trim() && item === arr[arr.length-1] && newArray.length === 0) flag=1
        if(callback(item) === true) newArray.push(item)
    })
    if(flag === 0) return newArray
    else return 'invalid input'
}

function testCase(){
    const testCases = [
        {
            id: 1,
            input: arr,
            callback: (n)=> n%2===0,
            output: [2,4,6,8]
        },
        {
            id: 2,
            input: [],
            callback: (n)=> n%2===0,
            output: 'invalid input'
        },
        {
            id: 3,
            input: {},
            callback: (n)=> n%2===0,
            output: 'invalid input'
        },
        {
            id: 4,
            input: 2,
            callback: (n)=> n%2===0,
            output: 'invalid input'
        },
        {
            id: 5,
            input: 1/0,
            callback: (n)=> n%2===0,
            output: 'invalid input'
        },
        {
            id: 6,
            input: null,
            callback: (n)=> n%2===0,
            output: 'invalid input'
        },
        {
            id: 7,
            input: ['hi', 'hello'],
            callback: (n)=> n.length===2,
            output: ['hi']
        },
        {
            id: 8,
            input: undefined,
            callback: (n)=> n%2===0,
            output: 'invalid input'
        },
        {
            id: 9,
            input: [' ', 'hi' , '  '],
            callback: (n)=> n.length===2 ,
            output: ['hi','  ']
        },
        {
            id: 10,
            input: [1,2,3],
            callback: (n)=> n%2===0,
            output:[2]
        },
        {
            id: 11,
            input: [3,4,5],
            callback: (n)=> n===3,
            output: [3]
        },
        {
            id: 12,
            input: ['15', '1000', '0'],
            callback: (n)=> typeof(n)==='number',
            output: []
        },
        {
            id: 13,
            input: [1/0, 0/0],
            callback: (n)=> n%2===0,
            output: 'invalid input'
        },
        {
            id: 14,
            input: [0, 1],
            callback: (n)=> n+2===2 ,
            output: [0]
        },
        {
            id: 15,
            input: false,
            callback: (n)=> n%2===0,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = MyFilter(test.input, test.callback)
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

// console.log(['  ', 'hi', ''].filter(n=> n.length===2))