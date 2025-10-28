function isPrime(num){
    if(typeof num !== 'number' || Math.round(num) !== num){
        return 'Invalid entry'
    }

    let prime
    if(num === 2){
        prime = num
    }else if(num > 2){
        for(let i=2; i<num; i++){
            if(num % i === 0){
                return false 
            }
        }
        prime = num
    }else{
        return false
    }

    if(prime){
        return true
    }
}

console.log(isPrime(7))
// console.log(isPrime('hi'))

const testCases = [
    {
        id: 1,
        input: 0,
        output: false
    },
    {
        id: 2,
        input: 1,
        output: false
    },
    {
        id: 3,
        input: 2,
        output: true
    },
    {
        id: 4,
        input: 16/2,
        output: false
    },
    {
        id: 5,
        input: 4,
        output: false
    },
    {
        id: 6,
        input: 7.1,
        output: 'Invalid entry'
    },
    {
        id: 7,
        input: 'hi',
        output: 'Invalid entry'
    },
    {
        id: 8,
        input: null,
        output: 'Invalid entry'
    },
    {
        id: 9,
        input: undefined,
        output: 'Invalid entry'
    },
    {
        id: 10,
        input: [],
        output: 'Invalid entry'
    },
    {
        id: 11,
        input: {},
        output: 'Invalid entry'
    },
    {
        id: 12,
        input: 15,
        output: false
    },
    {
        id: 13,
        input: 17,
        output: true
    },
    {
        id: 14,
        input: '',
        output: 'Invalid entry'
    },
    {
        id: 15,
        input: -4,
        output: false
    },
]
testCases.forEach(testCase => {
    let originalOutput = isPrime(testCase.input)
    let status
    if(testCase.output === originalOutput){
        status = 'passed'
    }else{
        status = 'failed'
    }
    
    let display = `
    Testcase ${testCase.id} ${status}
    Output Expected : ${testCase.output}
    Output got: ${originalOutput}
    `
    console.log(display)
}) 
