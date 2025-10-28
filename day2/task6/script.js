
const arr1 = [1,2,3,4,5,6,7,8,9]
const arr2 = [10,20,30,40,50]
const arr3 = [15,25,35,45,55]

function divBy3(arr){
    const threeMultiples = []
    arr.forEach(item => {
        if(item % 3 === 0){
            threeMultiples.push(item)
        }
    })
    return threeMultiples
}
// console.log(divBy3([1,2,3,4,5,6,7,8,9]))

function addMulOf3(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'
    const newArr = divBy3(arr)

    let sum = 0
    
    newArr.forEach(num => {
        if(typeof num === 'number') {
            sum+=num
        }
    })

    if(sum === 0) return 'Array lacks multiples of three'
    else return sum
}

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
        output: 9
    },
    {
        id: 8,
        input: [3,5,7,9,15],
        output: 27
    },
    {
        id: 9,
        input: true,
        output: 'invalid input'
    },
    {
        id: 10,
        input: false,
        output: 'invalid input'
    },
    {
        id: 11,
        input: ['Hi', 1,2,3,4],
        output: 3
    },
    {
        id: 12,
        input: [false, 'hello', [3, 2], {} ],
        output: 'Array lacks multiples of three'
    },
    {
        id: 13,
        input: [-1, -2, 0,-3],
        output: -3
    },
    {
        id: 14,
        input: [2,4,8,10],
        output: 'Array lacks multiples of three'
    },
    {
        id: 15,
        input: [0,0,0,0,0],
        output: 'Array lacks multiples of three'
    },
]

testCases.forEach(testCase => {
    let originalOutput = addMulOf3(testCase.input)
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