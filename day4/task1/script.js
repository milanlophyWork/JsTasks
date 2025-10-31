import {array} from '../../utils/array.js'

function flattening(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let newArr = []
    function flatten(arr){
        for(let item of arr){
            if(Array.isArray(item)){
                if(item.length === 0 && arr[arr.length-1] === item && newArr.length === 0) return 'invalid input'
                flatten(item)
            }else{
                if(typeof item === 'string' && !item.trim()) continue
                newArr.push(item)
            }
        }
        return newArr.length !== 0 ? newArr : 'invalid input'
    }
    return flatten(arr)
}
// console.log(flattening([1,[2,3,[4],5]]))

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
            input: ['Programming','is','Fun'],
            output:['Programming','is','Fun']
        },
        {
            id: 11,
            input: [1,2,[3,4],[5,[6]],7],
            output: [1,2,3,4,5,6,7]
        },
        {
            id: 12,
            input: ['15', ['1000'], '0'],
            output: ['15', '1000', '0']
        },
        {
            id: 13,
            input: [[2],[]],
            output: [2]
        },
        {
            id: 14,
            input: [[0]],
            output: [0]
        },
        {
            id: 15,
            input: [[]],
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = flattening(test.input)
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