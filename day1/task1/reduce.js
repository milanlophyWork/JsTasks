import { array, objCheck } from "../../utils/array.js"

const arr = [1,2,3,4]
function max(a,b){
    if(a>b){
        return a
    }
    else{
        return b
    }
}

function myReduce(arr, callback, initialVal=0){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let acc = initialVal 
    arr.forEach((item) => {
        acc = callback(acc, item)
    })
    return acc
}
// console.log(myReduce(arr,max, arr[0]))
// console.log(myReduce([1,2,3], (a,b)=> a+b, 0))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: arr,
            callback: (acc, curr)=> acc*curr,
            initialVal: 1,
            output: 24
        },
        {
            id: 2,
            input: arr,
            callback: (acc,curr)=> acc+curr,
            output: 10
        },
        {
            id: 3,
            input: {},
            callback: (acc, curr)=> acc*curr,
            output: 'invalid input'
        },
        {
            id: 4,
            input: 2,
            callback: (acc,curr)=> acc*curr,
            output: 'invalid input'
        },
        {
            id: 5,
            input: 1/0,
            callback: (acc, curr)=> acc/curr,
            output: 'invalid input'
        },
        {
            id: 6,
            input: null,
            callback: (acc, curr)=> acc*curr,
            output: 'invalid input'
        },
        {
            id: 7,
            input: ['hi', 'hello'],
            callback: (acc,curr)=> acc + curr,
            initialVal: '',
            output: 'hihello'
        },
        {
            id: 8,
            input: undefined,
            callback: (acc,curr)=> acc*curr,
            output: 'invalid input'
        },
        {
            id: 9,
            input: ['hi', 'hello','good morning'],
            callback: (acc, curr)=> curr*2,
            output: NaN
        },
        // {
        //     id: 10,
        //     input: [1,2,3],
        //     callback: (acc,curr)=> acc%curr,
        //     output: 3
        // },
        {
            id: 11,
            input: [3,4,[5]],
            callback: (acc, curr)=> curr+2,
            output: '52'
        },
        {
            id: 12,
            input: ['15', '1000', '0'],
            callback: (acc, curr)=> acc*curr,
            output: 0
        },
        {
            id: 13,
            input: [1/0, 0/0],
            callback: (acc,curr)=> acc*curr,
            output: NaN
        },
        {
            id: 14,
            input: [0, 1],
            callback: (acc,curr)=> acc + curr,
            initialVal: 10,
            output: 11
        },
        {
            id: 15,
            input: [3],
            callback: (acc,curr)=> curr+1,
            output: 4
        }
    ]

    testCases.forEach(test => {
        let originalOutput = myReduce(test.input, test.callback, test.initialVal)
        let status = 'passed'

        if(originalOutput !== test.output) {
            if(Object.is(originalOutput, NaN) && Object.is(test.output, NaN)) status='passed'
            else status = 'failed'
        }
        else{
            // Object.is(originalOutput, NaN)
            console.log(originalOutput, test.output)
        }

        let display = `
        Testcase ${test.id} ${status}
        Expected output : ${test.output}
        Output got : ${originalOutput}
        `
        console.log(display)
    })
}

testCase()

// console.log(['hi', 'hello','good morning'].reduce((acc,curr)=> curr*2))