function lengthyWord(text){
    if(typeof text !== 'string' || !text.trim()) return 'invalid input'
    const words = text.replaceAll(/[,!:;?.]/g,'').split(' ')

    let wordlength = 0
    let lengthyWord

    for(let i =0; i< words.length; i++){
       
        if(words[i].length > wordlength ){
            wordlength = words[i].length
            lengthyWord = words[i]
        }else if(words[i].length === wordlength ){
            wordlength = words[i].length
            lengthyWord = lengthyWord + ', ' +words[i]
        }
    }
    return lengthyWord
}
// console.log(lengthyWord('hello world of programming'))
// console.log(lengthyWord('The quick brown fox jumps over the lazy dog'))
// console.log(lengthyWord('I love coding'))

const testCases = [
    {
        id: 1,
        input: '',
        output: 'invalid input'
    },
    {
        id: 2,
        input: 'Hello world',
        output: 'Hello, world'
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
        output: 'Race'
    },
    {
        id: 10,
        input: 'World environment day',
        output: 'environment'
    },
    {
        id: 11,
        input: '1212',
        output: '1212'
    },
    {
        id: 12,
        input: '1551 00 12345 654',
        output: '12345'
    },
    {
        id: 13,
        input: 'Good morning, nice to meet you;',
        output: 'morning'
    },
    {
        id: 14,
        input: true,
        output: 'invalid input'
    },
    {
        id: 15,
        input: 'Hello; world!',
        output: 'Hello, world'
    },
    {
        id: 16,
        input: 'The quick brown fox jumps over the lazy dog',
        output: 'quick, brown, jumps'
    }
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