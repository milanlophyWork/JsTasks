function findMissing(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let missing = []
    let flag = 0
    arr.sort((a,b)=> a-b)

    for(let i=0; i< arr.length-1; i++){
        if(typeof arr[i]!=='number' || typeof arr[i+1] !== 'number' || isNaN(arr[i]) || isNaN(arr[i+1])) return 'invalid input'
        if(arr[i+1] !== arr[i]+1 && arr[i+1] !== arr[i]){
            flag=1
            missing.push(arr[i]+1)
        }else if(arr[i+1] === arr[i]) flag =0
    }
    
    if(flag === 0) return 'no missing number'
    else{
        if(missing.length === 1) return missing[0]
        else return 'many numbers are missing'
    }
}
// console.log(findMissing([1,2,3,5,6]))
// console.log(findMissing([2,3,4,5,6]))
// console.log(findMissing([10,11,13,14,15]))

const testCases = [
    {
        id: 1,
        input: [],
        output: 'invalid input'
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
        output: 'no missing number'
    },
    {
        id: 8,
        input: [3,5,6,7,8],
        output: 4
    },
    {
        id: 9,
        input: true,
        output: 'invalid input'
    },
    {
        id: 10,
        input: [1,3,5,6],
        output: 'many numbers are missing'
    },
    {
        id: 11,
        input: ['Hi', 1,2,3,4],
        output: 'invalid input'
    },
    {
        id: 12,
        input: [false, 'hello', [3, 2], {} ],
        output: 'invalid input'
    },
    {
        id: 13,
        input: [-1, -2, 0,-3],
        output: 'no missing number'
    },
    {
        id: 14,
        input: [2,5,8,10],
        output: 'many numbers are missing'
    },
    {
        id: 15,
        input: [0,0,0,0,0],
        output: 'no missing number'
    },
]

testCases.forEach(testCase => {
    let originalOutput = findMissing(testCase.input)
    let status

    if(testCase.output === originalOutput){
        status = 'passed'
    }else{
        status = 'failed'
    }
    
    let display = `
    Testcase ${testCase.id} ${status}
    Output Expected : ${testCase.output}
    Output Got : ${originalOutput}
        `
    console.log(display)
  
}) 