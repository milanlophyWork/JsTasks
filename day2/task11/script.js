
function perfectSqr(num){
    if(typeof num!== 'number' || isNaN(num)) return 'invalid input'
    if(num === 0 || num === 1){
        console.log(num, 'True')
        return 'True'
    }
    for(let i=0.1; i<=num/2; i=i+0.1){
        
        if(i.toFixed(2) * i.toFixed(2) === num){
            
            return 'True'
        }
    }
    
    return 'False'
}

// console.log(perfectSqr(16))
// console.log(perfectSqr(10))
// console.log(perfectSqr(25))

const testCases = [
    {
        id: 1,
        input: [],
        output: 'invalid input'
    },
    {
        id: 2,
        input: 3,
        output: 'False'
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
        input: 16,
        output: 'True'
    },
    {
        id: 8,
        input: 6.25,
        output: 'True'
    },
    {
        id: 9,
        input: 0,
        output: 'True'
    },
    {
        id: 10,
        input: 1,
        output: 'True'
    },
    {
        id: 11,
        input: 200/2,
        output: 'True'
    },
    {
        id: 12,
        input: -4,
        output: 'False'
    },
    {
        id: 13,
        input: true,
        output: 'invalid input'
    },
    {
        id: 14,
        input: '25',
        output: 'invalid input'
    },
    {
        id: 15,
        input: 1000,
        output: 'False' 
    }
]

testCases.forEach(testCase => {
    let originalOutput = perfectSqr(testCase.input)
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