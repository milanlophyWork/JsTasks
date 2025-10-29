function frequency(str){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'
    let freq = {}
    for(char of str){
        freq[char] = (freq[char] || 0) + 1
    }
    return freq
}

console.log(frequency('programming'))
console.log(frequency('hello'))

const testCases = [
    {
        id: 1,
        input: '',
        output: 'invalid input'
    },
    {
        id: 2,
        input: 'Hello world',
        output: {'H':1, 'e':1, 'l':3, 'o':2, ' ':1, 'w':1, 'r':1, 'd':1}
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
        output: {' ':5, 'H':1, 'e':1, 'l':3, 'o':2, 'r':1, 'd':1}
    },
    {
        id: 10,
        input: `It's beautiful`,
        output: {'I':1, 't':2, "'":1, 's':1, ' ':1, 'b':1, 'e':1, 'a':1, 'u':2, 'i':1, 'f':1, 'l':1}
    },
    {
        id: 11,
        input: 'Hi',
        output: {'H':1, 'i':1}
    },
    {
        id: 12,
        input: '15',
        output: {'1':1, '5':1}
    },
    {
        id: 13,
        input: '12 15',
        output: {'1':2, '2':1, ' ':1, '5':1}
    },
    {
        id: 14,
        input: 'mmmmmmmmmm',
        output: {'m':10}
    },
    {
        id: 15,
        input: false,
        output: 'invalid input'
    },
]

testCases.forEach(testCase => {
    let originalOutput = frequency(testCase.input)
    let status

    if(typeof originalOutput !== 'string'){
        const keys1 = Object.keys(testCase.output)
        const keys2 = Object.keys(originalOutput)

        if(keys1.length !== keys2.length) {
            status = 'failed'
            return
        }
        keys1.forEach(key =>{
            if(!originalOutput.hasOwnProperty(key) || originalOutput[key] !== testCase.output[key]){
                status = 'failed'
                return
            }else status = 'passed'
        })
    }else{
        if(testCase.output === originalOutput){
            status = 'passed'
        }else{
            status = 'failed'
        }
    }
    console.log(`Testcase ${testCase.id} ${status}`)
}) 
    