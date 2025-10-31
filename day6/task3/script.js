//Find missing number from an array that starts with 1 [ without includes() and indexOf()]

function findMissing(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let flag = 0
    let missing = []
    for(let i=0; i<arr.length;i++){
        if(arr[0]!== 1) return 'invalid input'

        if(arr[i-1]){
            if(arr[i]-arr[i-1] < 0 || arr[i]- arr[i-1] > 2) return 'invalid input'
            else if(arr[i]-arr[i-1]===2) missing.push(arr[i]-1) 
            else if(arr[i]-arr[i-1]===1) flag = 1
            else if(arr[i]-arr[i-1]===0) continue
        }
    }
    if(missing.length === 1) return missing[0]
    else if(missing.length > 1) return 'many numbers are missing'
    if(flag === 1) return 'no missing number'
}
// console.log(findMissing([1,2,3,5,6]))

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
            input: [0/0],
            output: 'invalid input'
        },
        {
            id: 6,
            input: null,
            output: 'invalid input'
        },
        {
            id: 7,
            input: [1,2,3,4,5],
            output: 'no missing number'
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
            input: ['Programming', 'is','Fun'],
            output:'invalid input'
        },
        {
            id: 11,
            input: [2,4,5,6,7,8],
            output: 'invalid input'
        },
        {
            id: 12,
            input: [3,4,2,1],
            output: 'invalid input'
        },
        {
            id: 13,
            input: [1,3,5,7],
            output: 'many numbers are missing'
        },
        {
            id: 14,
            input: [0,1,2,4,5],
            output: 'invalid input'
        },
        {
            id: 15,
            input: [1,2,2,3,5],
            output: 4
        }
    ]

    testCases.forEach((test,index) => {
        let originalOutput = findMissing(test.input)
        let status = 'passed'
        
        if(originalOutput !== test.output) status = 'failed'

        let display = `
        Testcase ${index+1} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()