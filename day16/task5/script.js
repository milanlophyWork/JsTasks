import { deepCheck } from "../../utils/array.js"

function triangle(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return 'invalid input'
    
    let width = []
    for(let item of arr) {
        if(!Array.isArray(item) || item.length === 0) return 'invalid input'
        width.push(item.length)
    }

    for(let i=0; i<width.length; i++){
        if(width[i+1] && width[i]+1 === width[i+1]){
            continue
        }else{
            if(width[i] !== width[width.length-1]) return 'not a triangle'
        }
    }
    let sum = 0
    let min
    for(let item of arr){
        if(!Array.isArray(item) || item.length === 0) return 'invalid input'
        min = findMin(item)

        if(typeof min !== 'number') return min
        else sum+=min
    }
    return sum
}
function findMin(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'
    let min = arr[0]
    for(let item of arr){
        if(typeof item !== 'number' || isNaN(item)) return 'invalid input'

        if(item < min){
            min = item
        }
    }
    return min
}
// console.log(triangle([[2],[3,4],[6,5,7], [4,1,8,3]]))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3,4,5],
            output: 'invalid input'
        },
        {
            id: 2,
            input: [[]],
            output: 'invalid input'
        },
        {
            id: 3,
            input: [[0],[1,2,3]],
            output: 'not a triangle'
         },
        {
            id: 4,
            input: {},
            output: 'invalid input'
        },
        {
            id: 5,
            input: [[2],[3,4],[6,5,7], [4,1,8,3]],
            output: 11
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
            input: [[0], [2,4], [5,3,8]],
            output: 5
        },
        {
            id: 10,
            input: [[3], [],[2,3,4]],
            output: 'invalid input'
        },
        {
            id: 11,
            input: [[0], [0,0], [0,0,0]],
            output: 0
        },
        {
            id: 12,
            input: [[-4],[3,-2]],
            output: -6
        },
        {
            id: 13,
            input: [[10],[20, 15], [30, 20, 30],[30, 20, 20, 40]],
            output: 65
        },
        {
            id: 14,
            input: [['hi'], ['hello', 'good morning']],
            output: 'invalid input'
        },
        {
            id: 15,
            input: [[30]],
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = triangle(test.input)
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