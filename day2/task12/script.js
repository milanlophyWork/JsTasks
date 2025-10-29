
function maxProduct(arr){
    if(!Array.isArray(arr)) return 'invalid input'
    if(arr.length <3) return 'no sufficient items in array'

    const sorted = arr.sort((a,b)=> b-a )
    const result = sorted.slice(0,3)
    return result.reduce((acc,curr)=> {

        if(typeof curr !== 'number' || typeof acc !== 'number' || isNaN(curr) || isNaN(acc)) return 'invalid input'
        else return acc*curr
    })
}

// console.log(maxProduct([-4,-3,-2,-1,0]))
// console.log(maxProduct([1,2,3,4]))
// console.log(maxProduct([-1,-2,-3,-4,-5]))

const testCases = [
    {
        id: 1,
        input: [],
        output: 'no sufficient items in array'
    },
    {
        id: 2,
        input: 3,
        output: 'invalid input'
    },
    {
        id: 3,
        input: ' ',
        output: 'invalid input'
    },
    {
        id: 4,
        input: {},
        output: 'invalid input'
    },
    {
        id: 5,
        input: null,
        output: 'invalid input'
    },
    {
        id: 6,
        input: undefined,
        output: 'invalid input'
    },
    {
        id: 7,
        input: [1,2,3,4,5,6],
        output: 120
    },
    {
        id: 8,
        input: [3,7,8,4,10,0],
        output: 560
    },
    {
        id: 9,
        input: [2,2,2,2,2],
        output: 8
    },
    {
        id: 10,
        input: [-1,3,-5,2],
        output: -6
    },
    {
        id: 11,
        input: ['Hi', 1,2,3,4],
        output: 'invalid input'
    },
    {
        id: 12,
        input: ['hi','hello','greetings'],
        output: 'invalid input'
    },
    {
        id: 13,
        input: [-1, -2, 0,-3],
        output: 0
    },
    {
        id: 14,
        input: [5, 6],
        output: 'no sufficient items in array'
    },
    {
        id: 15,
        input: [NaN, 3,2,4],
        output: 'invalid input'
    },
]

testCases.forEach((testCase,index) => {
    let originalOutput = maxProduct(testCase.input)
    let status

    if(testCase.output === originalOutput){
        status = 'passed'
    }else{
        status = 'failed'
    }
    
    let display = `
    Testcase ${index+1} ${status}
    Output Expected : ${testCase.output}
    Output Got : ${originalOutput}
        `
    console.log(display)
  
}) 