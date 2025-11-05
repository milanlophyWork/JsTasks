import { array } from "../../utils/array.js"

function makeStr(str1, str2){
    if(typeof str1 !== 'string' || !str1.trim() || typeof str2 !== 'string' || !str2.trim()) return 'invalid input'

    let flag = 0
    let count1 = {}
    let count2 = {}

    str1.split('').forEach(item => count1[item] = (count1[item] || 0) + 1)
    str2.split('').forEach(item => count2[item] = (count2[item] || 0) + 1)

    for(let i=0; i<str1.length; i++){
        if(count2.hasOwnProperty(str1[i]) && count1[str1[i]]=== count2[str1[i]]){
            flag = 1
        }else return false
    }
    if(flag === 1) return true
    else return false
}
// console.log(makeStr('a','b'))
// console.log(makeStr('aa','aab'))

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: 'a',
            input2: 'b',
            output: false
        },
        {
            id: 2,
            input1: 'aa',
            input2: 'aab',
            output: true
        },
        {
            id: 3,
            input1: 'treet',
            input2: 'street',
            output: true
         },
        {
            id: 4,
            input1: {},
            input2: 'hi',
            output: 'invalid input'
        },
        {
            id: 5,
            input1: 'hello',
            input2: 0/0,
            output: 'invalid input'
        },
        {
            id: 6,
            input1: null,
            input2: 'null',
            output: 'invalid input'
        },
        {
            id: 7,
            input1: [],
            input2: 'wow',
            output: 'invalid input'
        },
        {
            id: 8,
            input1: undefined,
            input2: 'milan',
            output: 'invalid input'
        },
        {
            id: 9,
            input1: 3,
            input2: 4,
            output: 'invalid input'
        },
        {
            id: 10,
            input: '  ',
            output: 'invalid input'
        },
        {
            id: 11,
            input1: ' ',
            input2: ' ',
            output: 'invalid input'
        },
        {
            id: 12,
            input1: 'aaaaaa',
            input2: 'ab',
            output: false
        },
        {
            id: 13,
            input1: 'c a t',
            input2: 'cat',
            output: false
        },
        {
            id: 14,
            input1: '12',
            input2: '12345',
            output: true
        },
        {
            id: 15,
            input1: '111222',
            input2: '123',
            output: false
        }
    ]

    testCases.forEach(test => {
        let originalOutput = makeStr(test.input1, test.input2)
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