import { array } from "../../utils/array.js"

function subArray(arr, size){
    if(!Array.isArray(arr) || arr.length === 0 || size > arr.length) return 'invalid input'

    let newArr = []
    let arrItems = []
    let items = Math.floor(arr.length / size)
    let index = items * size - 1
    let remaining = arr.length % size

    if(size === 0 || size === arr.length) return arr
    
    for(let i=0; i<=index; i++){
        if(typeof arr[i] !== 'number' || isNaN(arr[i])) return 'invalid input'

        arrItems.push(arr[i])
        if((i+1) % size === 0) {
            newArr.push([...arrItems])
            arrItems = []
        }
        
    }
    if(remaining !== 0) newArr.push(arr.slice(-remaining))
    
    // console.log(remaining, arr.slice(-remaining))
    return newArr
}
// console.log(subArray([1,2,3,4,5], 1))
// console.log(subArray([1,9,6,3,2], 3))

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: [1,2,3,4,5],
            input2: 3,
            output: [[1,2,3], [4,5]]
        },
        {
            id: 2,
            input1: [1,2,3,4,5],
            input2: 2,
            output: [[1,2],[3,4],[5]]
        },
        {
            id: 3,
            input1: [1,2,3,4,5],
            input2: 1,
            output: [[1],[2],[3],[4],[5]]
         },
        {
            id: 4,
            input1: {},
            input2: 3,
            output: 'invalid input'
        },
        {
            id: 5,
            input1: 0/0,
            input2: 3,
            output: 'invalid input'
        },
        {
            id: 6,
            input1: null,
            input2: 3,
            output: 'invalid input'
        },
        {
            id: 7,
            input1: [],
            input2: 3,
            output: 'invalid input'
        },
        {
            id: 8,
            input1: undefined,
            input2: 3,
            output: 'invalid input'
        },
        {
            id: 9,
            input1: [1,2,3,4,5],
            input2: 5,
            output: [1,2,3,4,5]
        },
        {
            id: 10,
            input1: [1,2,3],
            input2: 3,
            output: [1,2,3]
        },
        {
            id: 11,
            input1: [0,0,0,0],
            input2: 2,
            output: [[0,0],[0,0]]
        },
        {
            id: 12,
            input1: [1],
            input2: 2,
            output: 'invalid input'
        },
        {
            id: 13,
            input1: true,
            input2: 3,
            output: 'invalid input'
        },
        {
            id: 14,
            input1: [10,11,23,65],
            input2: 0,
            output: [10,11,23,65]
        },
        {
            id: 15,
            input1: false,
            input2: 3,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = subArray(test.input1, test.input2)
        let status = 'passed'
        if(Array.isArray(originalOutput)){
            for(let i=0; i<originalOutput.length; i++) {
                status = array(originalOutput[i], test.output[i])
            }
        }else{
            if(originalOutput !== test.output) status = 'failed' 
        } 
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()