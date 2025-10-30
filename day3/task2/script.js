function armStrong(num){ // sum of digit raised to total number of digits => 370 = 3^3 + 7^3 + 0^3
    if(typeof num !== 'number' || isNaN(num)) return 'invalid input'
    const power = numPower(num)
    
    const armStrong = power.reduce((acc,curr)=> acc+curr,0)
    
    if(num===armStrong){
        return true
    }else{
        return false
    }
}
// console.log(armStrong(370))

function numCount(num){
    let str = String(num)
    let count = 0

    for(char of str){
        count++  
    }
    return count
}
function numPower(num){
    const count = numCount(num)
    let str = String(num)
    let power = []

    for(char of str){
        power.push(char**count)
    }
    return power
}

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
            output: 'invalid input'
        },
        {
            id: 3,
            input: 15/6,
            output: false
        },
        {
            id: 4,
            input: 2,
            output: true
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
            input: 370,
            output: true
        },
        {
            id: 10,
            input: 0,
            output: true
        },
        {
            id: 11,
            input: 0/0,
            output: 'invalid input'
        },
        {
            id: 12,
            input: -153,
            output: false
        },
        {
            id: 13,
            input: 153.0,
            output: true
        },
        {
            id: 14,
            input: 153.1,
            output: false
        },
        {
            id: 15,
            input: 4/2,
            output: true
        }
    ]

    testCases.forEach(testCase => {
        let originalOutput = armStrong(testCase.input)
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