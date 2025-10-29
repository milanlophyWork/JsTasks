function lengthyWord(text){
    if(!Array.isArray(text) || text.length === 0) return 'invalid input'
    let wordlength = 0
    let lengthyWord

    for(let i =0; i< text.length; i++){
        if(typeof text[i] !== 'string' || !text[i].trim()) return 'invalid input'
        if(text[i].length > wordlength ){
            wordlength = text[i].length
            lengthyWord = text[i]
        }
    }
    return lengthyWord
}
// console.log(lengthyWord(['cat','dog','elephant','tiger']))
// console.log(lengthyWord(['apple','banana','orange']))
// console.log(lengthyWord(['programming', 'is', 'fun']))

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
        input: NaN,
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
        input: [' ', '   ','  '],
        output: 'invalid input'
    },
    {
        id: 10,
        input: ['Programming', 'is','Fun'],
        output: 'Programming'
    },
    {
        id: 11,
        input: 'Hi',
        output: 'invalid input'
    },
    {
        id: 12,
        input: ['15', '1000', '0'],
        output: '1000'
    },
    {
        id: 13,
        input: ['15', '1000', 0],
        output: 'invalid input'
    },
    {
        id: 14,
        input: ['hello', 'world'],
        output: 'hello'
    },
    {
        id: 15,
        input: false,
        output: 'invalid input'
    },
]
testCases.forEach(testCase => {
    let originalOutput = lengthyWord(testCase.input)
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