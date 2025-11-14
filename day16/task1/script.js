import { deepCheck } from "../../utils/array.js"

function parenthesis(str){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'
    let length = []

    for(let char of str){
        if(char !== '(' && char !== ')') return 'invalid input'
    }

    for(let i=0; i<str.length; i++){
        for(let j=i; j< str.length; j++){
            if(str[i]==='('){
                if(str[j]===')'){
                    length.push(j-i)
                }
            }
        }
        
    }
    length.sort((a,b)=> b-a)
    return length.length === 0 ? 'no valid parenthesis': length[0]
} 

console.log(parenthesis(')()())'))


function testCase(){
    const testCases = [
        {
            id: 1,
            input: ')()())',
            output: 4
        },
        {
            id: 2,
            input: '(()',
            output: 2
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
            input: '()()()',
            output: 5
        },
        {
            id: 10,
            input: 'hello',
            output: 'invalid input'
        },
        {
            id: 11,
            input: '((#))',
            output: 'invalid input'
        },
        {
            id: 12,
            input: '((((',
            output: 'no valid parenthesis'
        },
        {
            id: 13,
            input: '(()())((',
            output: 5
        },
        {
            id: 14,
            input: '()',
            output: 1
        },
        {
            id: 15,
            input: ')))',
            output: 'no valid parenthesis'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = parenthesis(test.input)
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