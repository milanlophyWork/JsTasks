import { array } from "../../utils/array.js"

function findTarget(arr, target){
    let checkSort
    
    if(Array.isArray(arr) && arr.length !== 0){
        for(let item of arr) {
            if(typeof item !== 'number' || isNaN(item)) return 'invalid input'
        }

        let sorted = [...arr].sort((a,b)=> a-b)
        checkSort = array(arr, sorted)
    }else return 'invalid input'

    let newArr = arr
    
    if(checkSort !== 'passed') return 'given array is not sorted'
    else{
        for(let i=0; i<arr.length; i++){
            if(arr[i]=== target) return i
            else {
                newArr.push(target)
                newArr.sort((a,b)=> a-b)
                return newArr.indexOf(target)
            }
        }
    }
}
// console.log(findTarget([1,3,5,6], 5))
// console.log(findTarget([1,3,5,6], 2))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3,4,5],
            target: 5,
            output: 4
        },
        {
            id: 2,
            input: ['', 'hello'],
            target: 7,
            output: 'invalid input'
        },
        {
            id: 3,
            input: [0,1,2,3,4,5],
            target: 2,
            output: 2
         },
        {
            id: 4,
            input: {},
            target: 5,
            output: 'invalid input'
        },
        {
            id: 5,
            input: 0/0,
            target: 5,
            output: 'invalid input'
        },
        {
            id: 6,
            input: null,
            target: 5,
            output: 'invalid input'
        },
        {
            id: 7,
            input: [],
            target: 5,
            output: 'invalid input'
        },
        {
            id: 8,
            input: undefined,
            target: 5,
            output: 'invalid input'
        },
        {
            id: 9,
            input: 3,
            target: 5,
            output: 'invalid input'
        },
        {
            id: 10,
            input: [1,0/0,3],
            target: 5,
            output: 'invalid input'
        },
        {
            id: 11,
            input: [0,7,0,3,5],
            target: 0,
            output: 'given array is not sorted'
        },
        {
            id: 12,
            input: [6,7,8,10],
            target: 9,
            output: 3
        },
        {
            id: 13,
            input: true,
            target: 5,
            output: 'invalid input'
        },
        {
            id: 14,
            input: [6,7,8],
            target: 5,
            output: 0
        },
        {
            id: 15,
            input: [0.5, 1/2],
            target: 1,
            output: 2
        }
    ]

    testCases.forEach(test => {
        let originalOutput = findTarget(test.input, test.target)
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