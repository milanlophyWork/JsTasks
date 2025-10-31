function toKebabCase(str){
    if(typeof str !== 'string' || str.includes(' ') || !str.trim()) return 'invalid input'
    
    let kebab = ''
 
    if(str[0] === str[0].toUpperCase()){
        let first = str[0].toLowerCase()
        str = first + str.slice(1)
    }

    for(char of str){
        kebab += char.replace(/[A-Z]/, `-${char.toLowerCase()}`)
    }
    return kebab
}
// console.log(toKebabCase('MyFunction'))

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
            output: 'my-function'
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
            input: 'MyFunctioN',
            output: 'my-functio-n'
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
            input: 'this-is-amazing',
            output: 'this-is-amazing'
        },
        {
            id: 15,
            input: 'goodMorning;',
            output: 'good-morning;'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = toKebabCase(test.input)
        let status
        if(test.output === originalOutput){
            status = 'passed'
        }else{
            status = 'failed'
        }
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCases()