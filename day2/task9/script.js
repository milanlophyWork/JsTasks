function validEmail(email){
    if(typeof email !== 'string' || !email.trim()) return 'invalid input'
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zZ0-9.-]+\.[a-z]{2,}$/g
    return pattern.test(email)
}
// console.log(validEmail('test@example.com'))
// console.log(validEmail('invalid.email.com'))
// console.log(validEmail('user@domain'))

const testCases = [
    {
        id: 1,
        input: [],
        output: 'invalid input'
    },
    {
        id: 2,
        input: 3,
        output: 'invalid input'
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
        input: 'milan@gmail.com',
        output: true
    },
    {
        id: 8,
        input: '    milan@gmail.com',
        output: false
    },
    {
        id: 9,
        input: 'milangmail.com',
        output: false
    },
    {
        id: 10,
        input: 'milan@gmailcom',
        output: false
    },
    {
        id: 11,
        input: 'milangmailcom',
        output: false
    },
    {
        id: 12,
        input: 'milan.com',
        output: false
    },
    {
        id: 13,
        input: '@gmail.com',
        output: false
    },
    {
        id: 14,
        input: 'miLan@gmail.com',
        output: true
    },
    {
        id: 15,
        input: 'milan1234@gmail.com',
        output: true 
    },
    {
        id: 16,
        input: 'milan@qwerty1234.com',
        output: true
    }
]

testCases.forEach(testCase => {
    let originalOutput = validEmail(testCase.input)
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