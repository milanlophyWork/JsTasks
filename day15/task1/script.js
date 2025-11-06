import { array } from "../../utils/array.js"

function findIndex(arr, target){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'
    let newArr = []

    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] !== 'number' || isNaN(arr[i])) return 'invalid input'

        for(let j=i; j<arr.length; j++){
            if(i===j) continue
            if(arr[i] + arr[j] === target){
                newArr.push([i,j])
            }
        }    
    }
    return newArr.length === 0 ? -1 : newArr
}
// console.log(findIndex([2,7,11,15], 9))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [1,2,3,4,5],
            target: 5,
            output: [[0,3],[1,2]]
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
            target: 5,
            output: [[0,5],[1,4],[2,3]]
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
            output: [[0,2]]
        },
        {
            id: 12,
            input: [7,6,8],
            target: 3,
            output: -1
        },
        {
            id: 13,
            input: true,
            target: 5,
            output: 'invalid input'
        },
        {
            id: 14,
            input: [{'val': 1.4}, 0, 1.1],
            target: 5,
            output: 'invalid input'
        },
        {
            id: 15,
            input: [0.5, 1/2],
            target: 1,
            output: [[0,1]]
        }
    ]

    testCases.forEach(test => {
        let originalOutput = findIndex(test.input, test.target)
        let status = 'passed'
        if(Array.isArray(originalOutput)){
            originalOutput.forEach(orgItem => {
                if(Array.isArray(orgItem)){
                    test.output.forEach(testItem => {
                        status = array(orgItem, testItem)
                    })
                }
            })
        }else status = array(originalOutput, test.output)
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()