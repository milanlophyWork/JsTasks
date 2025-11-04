function pattern(str){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'
    let testStr = ''

    let first = ''
    for(let i=0;i<str.length;i++){
        first += str[i]
        testStr += first
        console.log(first)
    }
    let second = ''
    for(let i=1;i<str.length;i++){
        second = str.slice(i)
        testStr += second
        console.log(second)
    }
    return testStr
}
console.log(pattern('CAT'))

function testCase(){

    const testCases = [
        {
            id: 1,
            input: 'jesus',
            output: 'jjejesjesujesusesussususs'
        },
        {
            id: 2,
            input: '',
            output: 'invalid input'
        },
        {
            id: 3,
            input: 'c',
            output: 'c'
        },
        {
            id: 4,
            input: 'ca',
            output: 'ccaa'
        },
        {
            id: 5,
            input: 20,
            output: 'invalid input'
        },
        {
            id: 6,
            input: 'CAT',
            output: 'CCACATATT'
            
        },
        {
            id: 7,
            input: {},
            output: 'invalid input'
        },
        {
            id: 8,
            input: [],
            output: 'invalid input'
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
            input: 'hi hi',
            output: 'hhihi hi hhi hii hi hihii'
            
        },
        {
            id: 12,
            input: 'cat',
            output: 'ccacatatt'
        },
        {
            id:13,
            input: null,
            output: 'invalid input'
        },
        {
            id: 14,
            input: undefined,
            output: 'invalid input',
        },
        {
            id: 15,
            input: ' ',
            output: 'invalid input'
        }
    ]

   testCases.forEach((test,index) => {
        let originalOutput = pattern(test.input)
        let status = 'passed'

        if(test.output !== originalOutput){
            status = 'failed'
        }

        let display = `
        Testcase ${index+1} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    })
}
testCase()