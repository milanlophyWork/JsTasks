function toSnakeCase(text){
    if(typeof text !== 'string' || text.includes(' ') || !text.trim()) return 'invalid input'

    let newText = ''
       
    if(text[0] === text[0].toUpperCase()) { // if first char is capital just convert it to lower case without underscore.
        let first = text[0].toLowerCase()
        text = first + text.slice(1)  
    }
     
    for(let char of text){
        newText += char.replace(/[A-Z]/, `_${char.toLowerCase()}`)
    }

    return newText
}
// console.log(toSnakeCase('MyFunction'))

function testCases(){

    const testCases = [
        {
            id: 1,
            input: '',
            output: 'invalid input'
        },
        {
            id: 2,
            input: '123',
            output: '123'
        },
        {
            id: 3,
            input: 15/6,
            output: 'invalid input'
        },
        {
            id: 4,
            input: 'myFunction',
            output: 'my_function'
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
            input: 'MyFuNcTioN',
            output: 'my_fu_nc_tio_n'
        },
        {
            id: 10,
            input: 'HaiHel loo',
            output: 'invalid input'
        },
        {
            id: 11,
            input: 0/0,
            output: 'invalid input'
        },
        {
            id: 12,
            input: 'haihelloo',
            output: 'haihelloo'
        },
        {
            id: 13,
            input: '153.0,23',
            output: '153.0,23'
        },
        {
            id: 14,
            input: 'this_is_amazing',
            output: 'this_is_amazing'
        },
        {
            id: 15,
            input: 'goodMorning;',
            output: 'good_morning;'
        }
    ]

    testCases.forEach(testCase => {
        let originalOutput = toSnakeCase(testCase.input)
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
}
testCases()