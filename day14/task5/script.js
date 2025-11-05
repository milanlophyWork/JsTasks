import { array } from "../../utils/array.js"

function nonRepeatChar(str){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'

    let mySet = new Set()
    let newSet = new Set()
    for(let i=0; i<str.length; i++){
        if(mySet.has(str[i])){
            newSet.add(str[i])
        }
        mySet.add(str[i])
    }
    return  str.split('').indexOf([...mySet.difference(newSet)][0])
}
// console.log(nonRepeatChar('roses are red'))
// console.log(nonRepeatChar('aabb'))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: 'roses are red',
            output: 1
        },
        {
            id: 2,
            input: 'aabb',
            output: -1
        },
        {
            id: 3,
            input: '',
            output: 'invalid input'
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
            input: '  i  ',
            output: 2
        },
        {
            id: 11,
            input: ' ',
            output: 'invalid input'
        },
        {
            id: 12,
            input: 'aaaaaa',
            output: -1
        },
        {
            id: 13,
            input: true,
            output: 'invalid input'
        },
        {
            id: 14,
            input: '12345',
            output: 0
        },
        {
            id: 15,
            input: '111222',
            output: -1
        }
    ]

    testCases.forEach(test => {
        let originalOutput = nonRepeatChar(test.input)
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