import { objCheck } from "../../utils/array.js"

// Word frequency counter
function wordFrequency(str){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'

    let arr = str.toLowerCase().replace(/[-_@$%#&,:;.!]/g,'').split(' ')
    let obj = {}
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== '')
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }
    return obj
}
// console.log(wordFrequency('Hello hello world, world!'))

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
            input: ' ',
            output: 'invalid input'
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: '123',
            output: {'123' : 1}
        },
        {
            id: 10,
            input: 'Programming is Fun',
            output: {'programming' : 1, 'is' : 1 , 'fun': 1}
        },
        {
            id: 11,
            input: 'h   H   h ',
            output: {'h': 3}
        },
        {
            id: 12,
            input: '15  1000 0',
            output: {'15': 1, '1000': 1, '0':1}
        },
        {
            id: 13,
            input: 'HI hi',
            output: {'hi': 2}
        },
        {
            id: 14,
            input: 'hi    i  hi  ',
            output: {'hi': 2, 'i': 1}
        },
        {
            id: 15,
            input: false,
            output: 'invalid input'
        }
    ]

    testCases.forEach((test,index) => {
        let originalOutput = wordFrequency(test.input)
        let status = objCheck(originalOutput, test.output)
        
        let display = `
        Testcase ${index+1} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()