import { array } from '../../utils/array.js'

function sortBySum(arr: number[][]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let newArr:{}[] = []
    let values:number[] = []
    let result: number[] = []
    
    for(let item of arr){
        if(!Array.isArray(item)) return 'invalid input'
        let sumofItems = findSum(item)

        if(typeof sumofItems === 'number') {
            newArr.push({[sumofItems] : item })
            values.push(sumofItems)
        }
    }
    
    if(values.length === 0) return 'invalid input'
    values = removeDuplicateAndSort(values)

    values.forEach(val=> {
        newArr.forEach(obj => {
            if(obj[val]) result.push(obj[val])
        })
    })

    return result
}
function findSum(arr: number[]){
    if(arr.length !== 0)
    return arr.reduce((acc,curr)=> acc+curr)
}
function removeDuplicateAndSort(arr: number[]){
    let newArr = [...arr]

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]) newArr.splice(i,1)
        }
    }
    return newArr.sort((a,b)=> b-a)
}
// console.log(sortBySum([[1,2,3],[4],[2,7]]))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [[1,2,3],[4],[2,7]],
            output: [[2,7],[1,2,3],[4]]
        },
        {
            id: 2,
            input: [[1,2,3,'hi'],[4],[2,7]],
            output: [[2,7],[4]]
        },
        {
            id: 3,
            input: [[1,2,3],[4,5],[2,7]],
            output: [[4,5],[2,7],[1,2,3]]
         },
        {
            id: 4,
            input: 7,
            output: 'invalid input'
        },
        {
            id: 5,
            input: {'a': 3, 'b': 4},
            output: 'invalid input'
        },
        {
            id: 6,
            input: [[1,2,3],[],[2,7]],
            output: [[2,7],[1,2,3]]
        },
        {
            id: 7,
            input: [[],[],[]],
            output: 'invalid input'
        },
        {
            id: 8,
            input: [[1,2,3],[2,4],[6]],
            output: [[1,2,3],[2,4],[6]]
        },
        {
            id: 9,
            input: [[-1,-2,-3],[-2,-7]],
            output: [[-1,-2,-3],[-2,-7]]
        },
        {
            id: 10,
            input: [[],[4],[]],
            output: [[4]]
        },
        {
            id: 11,
            input: ['hi', [1,2,3],[{'a': 1}],[2,7]],
            output: 'invalid input'
        },
        {
            id: 12,
            input: [[1,2,3],[{'a': 1}],[2,7]],
            output: [[2,7],[1,2,3]]
        },
        {
            id: 13,
            input: [[1,2,3],[4],[-2,7]],
            output: [[1,2,3],[-2,7],[4]]
        },
        {
            id: 14,
            input: [[0,0,0],[0],[-2]],
            output: [[0,0,0],[0],[-2]]
        },
        {
            id: 15,
            input: [[],[0],[-2]],
            output: [[0],[-2]]
        }
    ]

    testCases.forEach(test => {
        let originalOutput = sortBySum(test.input)
        let status = 'passed'

        if(Array.isArray(originalOutput)){
            for(let i=0; i<originalOutput.length; i++){
                if(Array.isArray(originalOutput[i])){
                    status = array(originalOutput[i], test.output[i])
                }
            }
        }else {
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