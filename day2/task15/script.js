
function reverseStr(str){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'
    let reverse = ''
    for(char of str){
        reverse = char + reverse
    }
    const ordered = reverse.split(' ').reverse().join(' ')
    return ordered
}
// console.log(reverseStr('Hello world'))
// console.log(reverseStr('Programmers are awesome'))
// console.log(reverseStr('Programming is fun'))

const testCases = [
    {
        id: 1,
        input: '',
        output: 'invalid input'
    },
    {
        id: 2,
        input: 'Hello world',
        output: 'olleH dlrow'
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
        output: 'ecaR   raC'
    },
    {
        id: 10,
        input: 'Programmers are awesome',
        output: 'sremmargorP era emosewa'
    },
    {
        id: 11,
        input: 'hhhhhh iiiii',
        output: 'hhhhhh iiiii'
    },
    {
        id: 12,
        input: '1551',
        output: '1551'
    },
    {
        id: 13,
        input: '1212',
        output: '2121'
    },
    {
        id: 14,
        input: true,
        output: 'invalid input'
    },
    {
        id: 15,
        input: '1551 1551',
        output: '1551 1551'
    },
]

testCases.forEach(testCase => {
    let originalOutput = reverseStr(testCase.input)
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