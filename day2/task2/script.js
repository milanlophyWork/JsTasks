function wordCount(text){
    if(typeof text !== 'string' || !text.trim()){
        return 'invalid input'
    }
    const cleanText = text.replace(/[.!,;?:]/g,'')
    let words = cleanText.trim().split(/\s+/)
    return words.length
}
// console.log(wordCount('Hello world'))
// console.log(wordCount('This is a sample sentence.'))
// console.log(wordCount('Programming is  Fun!'))

const testCases = [
    {
        id: 1,
        input: '',
        output: 'invalid input'
    },
    {
        id: 2,
        input: 'Hello world',
        output: 2
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
        input: ' Hello   World ',
        output: 2
    },
    {
        id: 10,
        input: '    Programming is  Fun        .',
        output: 3
    },
    {
        id: 11,
        input: 'Hi',
        output: 1
    },
    {
        id: 12,
        input: '15',
        output: 1
    },
    {
        id: 13,
        input: '12 15',
        output: 2
    },
    {
        id: 14,
        input: true,
        output: 'invalid input'
    },
    {
        id: 15,
        input: false,
        output: 'invalid input'
    },
]
testCases.forEach(testCase => {
    let originalOutput = wordCount(testCase.input)
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
    