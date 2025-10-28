function anagram(str1, str2){
    if(typeof str1 !== 'string' || typeof str2 !== 'string' || 
        str1===str2 || !str1.trim() || !str2.trim()) return 'invalid inputs'

    str1 = str1.replace(/\s/g, '').toLowerCase()
    str2 = str2.replace(/\s/g, '').toLowerCase()

    if(str1.length !== str2.length) return false
    
    let sort1 = str1.split('').sort().join('')
    let sort2 = str2.split('').sort().join('')
    return sort1===sort2
}

// console.log(anagram('silent', 'listen'),anagram('restful', 'fluster'))



const testCases = [
    {
        id: 1,
        input1: 'silent',
        input2: 'listen',
        output: true
    },
    {
        id: 2,
        input1: '',
        input2: 'listen',
        output: 'invalid inputs'
    },
    {
        id: 3,
        input1: '',
        input2: '',
        output: 'invalid inputs'
    },
    {
        id: 4,
        input1: 'silent',
        input2: 'silent',
        output: 'invalid inputs'
    },
    {
        id: 5,
        input1: {},
        input2: 'listen',
        output: 'invalid inputs'
    },
    {
        id: 6,
        input1: {},
        input2: undefined,
        output: 'invalid inputs'
    },
    {
        id: 7,
        input1: 43,
        input2: 34,
        output: 'invalid inputs'
    },
    {
        id: 8,
        input1: true,
        input2: [],
        output: 'invalid inputs'
    },
    {
        id: 9,
        input1: null,
        input2: -5,
        output: 'invalid inputs'
    },
    {
        id: 10,
        input1: 'hello',
        input2: 'world',
        output: false
    },
    {
        id: 11,
        input1: 'on',
        input2: 'no',
        output: true
    },
    {
        id: 12,
        input1: 'n',
        input2: 's',
        output: false
    },
    {
        id: 13,
        input1: 'trend',
        input2: 'trending',
        output: false
    },
    {
        id: 14,
        input1: 'Silent',
        input2: 'Listen',
        output: true
    },
    {
        id: 15,
        input1: 'SilEnt',
        input2: 'LisTen',
        output: true
    },
]

testCases.forEach(testCase => {
    let originalOutput = anagram(testCase.input1, testCase.input2)
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