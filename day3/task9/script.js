function removeDuplicate(text){
    if(typeof text !== 'string' || !text.trim()) return 'invalid input'

    const mySet = new Set()
    for(char of text){
        mySet.add(char)
    }
    
    let noDuplicateStr = '';
    [...mySet].forEach(item => {
        noDuplicateStr += item
    })
    
    // console.log(...mySet)
    return noDuplicateStr
}

console.log(removeDuplicate('apple'))

function testCases(){

    const testCases = [
        {
            id: 1,
            input: '',
            output: 'invalid input'
        },
        {
            id: 2,
            input: '1223',
            output: '123'
        },
        {
            id: 3,
            input: 15/6,
            output: 'invalid input'
        },
        {
            id: 4,
            input: 'apple',
            output: 'aple'
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
            input: 'Hai Hello',
            output: 'Hai elo'
        },
        {
            id: 10,
            input: '    ',
            output: 'invalid input'
        },
        {
            id: 11,
            input: 0/0,
            output: 'invalid input'
        },
        {
            id: 12,
            input: 'mmmmm',
            output: 'm'
        },
        {
            id: 13,
            input: 'm',
            output: 'm'
        },
        {
            id: 14,
            input: 'this Is Amazing',
            output: 'this IAmazng'
        },
        {
            id: 15,
            input: 'Morning;',
            output: 'Mornig;'
        }
    ]

    testCases.forEach(testCase => {
        let originalOutput = removeDuplicate(testCase.input)
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