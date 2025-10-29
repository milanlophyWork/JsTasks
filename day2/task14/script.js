function newString(str){
    const pattern = str.toLowerCase().replaceAll(' ','').replaceAll(',','').replaceAll('!','')
    return pattern
}

function palindrome(str){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'
    let reverse = ''

    for(char of str){
        reverse = char + reverse
    }
    const newStr = newString(str)
    const newReverse = newString(reverse)

    if(newStr === newReverse){
        return 'True'
    }else{
        return 'False'
    }
}
// console.log(palindrome('Racecar'))
// console.log(palindrome('Hello, world!'))
// console.log(palindrome('A man, a plan, a canal, Panama!'))

const testCases = [
    {
        id: 1,
        input: '',
        output: 'invalid input'
    },
    {
        id: 2,
        input: 'Hello world',
        output: 'False'
    },
    {
        id: 3,
        input: ' ',
        output: 'invalid input'
    },
    {
        id: 4,
        input: 2,
        output: 'invalid input'
    },
    {
        id: 5,
        input: {},
        output: 'invalid input'
    },
    {
        id: 6,
        input: null,
        output: 'invalid input'
    },
    {
        id: 7,
        input: [],
        output: 'invalid input'
    },
    {
        id: 8,
        input: undefined,
        output: 'invalid input'
    },
    {
        id: 9,
        input: ' Race   Car ',
        output: 'True'
    },
    {
        id: 10,
        input: 'RaceCar',
        output: 'True'
    },
    {
        id: 11,
        input: 'A man, a plan, a canal, Panama!',
        output: 'True'
    },
    {
        id: 12,
        input: '1551',
        output: 'True'
    },
    {
        id: 13,
        input: '1212',
        output: 'False'
    },
    {
        id: 14,
        input: true,
        output: 'invalid input'
    },
    {
        id: 15,
        input: '1551 1551',
        output: 'True'
    },
]
testCases.forEach(testCase => {
    let originalOutput = palindrome(testCase.input)
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