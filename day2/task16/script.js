import { array } from "../../utils/array.js"
function sort(arr){
    let flag = 0
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    arr.forEach(item => {
        if(typeof item !== 'string' || !item.trim()) flag = 0
        else flag = 1
    })
    arr.sort((a,b)=> a.length - b.length)
    
    if(flag === 0) return 'invalid input'
    else return arr
}

// console.log(sort(['open','source','programming','is','fun']))
// console.log(sort(["hello", "world"]))
// console.log(sort(["cat", "dog", "elephant", "tiger"]))

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
        input: NaN,
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
        input: [' ', '   ','  '],
        output: 'invalid input'
    },
    {
        id: 10,
        input: ['Programming', 'is','Fun'],
        output:['is','Fun','Programming']
    },
    {
        id: 11,
        input: ['Hi'],
        output: ['Hi']
    },
    {
        id: 12,
        input: ['15', '1000', '0'],
        output: ['0','15','1000']
    },
    {
        id: 13,
        input: ['15', '1000', 0],
        output: 'invalid input'
    },
    {
        id: 14,
        input: ['hello', 'world'],
        output: ['hello', 'world']
    },
    {
        id: 15,
        input: false,
        output: 'invalid input'
    }
]

testCases.forEach(testCase => {
    let originalOutput = sort(testCase.input)
    let status = array(originalOutput, testCase.output)
    
    let display = `
    Testcase ${testCase.id} ${status}
    Output Expected : ${testCase.output}
    Output got: ${originalOutput}
    `
    console.log(display)
}) 
    