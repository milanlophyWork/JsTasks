// Flatten nested arrays

import { array } from "../../utils/array.js"

function wrap(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'
    let newArr=[]
    
    function flatten(arr){
        for(let item of arr){
            if(Array.isArray(item)){
                flatten(item)
            }else{
                if(typeof item === 'string' && !item.trim()) continue
                else newArr.push(item)
            }
        }
        return newArr
    }
    return flatten(arr)
}
// console.log(wrap([1,[2,[3,[4]],5]]))
// console.log(wrap([2,[4,5]]))

function testCases(){

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
            output: []
        },
        {
            id: 10,
            input: ['Programming', 'is','Fun'],
            output:['Programming', 'is','Fun']
        },
        {
            id: 11,
            input: ['Hi', [6,'wow']],
            output: ['Hi',6,'wow']
        },
        {
            id: 12,
            input: ['15', [[['1000']]], ['0',4,[5]]],
            output: ['15','1000', '0', 4, 5]
        },
        {
            id: 13,
            input: [[], 0],
            output: [0]
        },
        {
            id: 14,
            input: [[3],[['1']],[[2]],[[['5']]]],
            output: [3,'1',2,'5']
        },
        {
            id: 15,
            input: [' ', [4,9]],
            output: [4,9]
        }
    ]

    testCases.forEach(test => {
        let originalOutput = wrap(test.input)
        let status = array(originalOutput, test.output)
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCases()