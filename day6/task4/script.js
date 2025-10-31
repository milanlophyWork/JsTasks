// String pattern challenge
function strPattern(n){
    if(typeof n !== 'number' || isNaN(n) || Math.round(n) !== n || n<1) return 'invalid input'

    let testStr = ''
    let text=65
    for(let i=1; i<=n;i++){
        for(let j=i; j<=i;j++){
            console.log(String.fromCharCode(text).repeat(j))
            testStr+=String.fromCharCode(text).repeat(j)
        }
        text === 90 ?  text = 65 : text++
    }
    return testStr
}
// strPattern(5)


function testCase(){

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
            input: 0/0,
            output: 'invalid input'
        },
        {
            id: 5,
            input: 2.2,
            output: 'invalid input'
        },
        {
            id: 6,
            input: null,
            output: 'invalid input'
        },
        {
            id: 7,
            input: 5,
            output: 'ABBCCCDDDDEEEEE'
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: '3',
            output: 'invalid input'
        },
        {
            id: 10,
            input: -5,
            output: 'invalid input'
        },
        {
            id: 11,
            input: 0,
            output: 'invalid input'
        },
        {
            id: 12,
            input: 1,
            output: 'A'
        },
        {
            id: 13,
            input: 4/2,
            output: 'ABB'
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
        }
    ]

    testCases.forEach((test,index) => {
        let originalOutput = strPattern(test.input)
        let status = 'passed'
        if(originalOutput !== test.output) status = 'failed'
        
        let display = `
        Testcase ${index+1} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()