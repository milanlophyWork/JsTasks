// Password strength checker
function passwordCheck(str){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'
    
    if(str.length < 6){
        return 'weak'
    }else if(str.length <8 && (/[A-Za-z]+[0-9_@#$*-]/g).test(str)){
        return 'medium'
    }else if(str.length >=8 && (/[A-Z]/g).test(str) && (/[a-z]/g).test(str) && (/[0-9]/g).test(str) && (/[_@#$-]+/g).test(str)){
        return 'strong'
    }else{
        return 'include upperCase, lowerCase, digits and special characters'
    }
}
console.log(passwordCheck('Mila_1234'))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: '',
            output: 'invalid input'
        },
        {
            id: 2,
            input: '*******',
            output: 'include upperCase, lowerCase, digits and special characters'
        },
        {
            id: 3,
            input: {},
            output: 'invalid input'
        },
        {
            id: 4,
            input: 'Milan@123',
            output: 'strong'
        },
        {
            id: 5,
            input: 'MILAN@123',
            output: 'include upperCase, lowerCase, digits and special characters'
        },
        {
            id: 6,
            input: 'Milan',
            output: 'weak'
        },
        {
            id: 7,
            input: 'Mila123',
            output: 'medium'
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: '201234', 
            output: 'include upperCase, lowerCase, digits and special characters'
        },
        {
            id: 10,
            input: 'Mila#@!',
            output:'medium'
        },
        {
            id: 11,
            input: '123',
            output: 'weak'
        },
        {
            id: 12,
            input: 'MilanMila',
            output: 'include upperCase, lowerCase, digits and special characters'
        },
        {
            id: 13,
            input: 'Mila1001',
            output: 'include upperCase, lowerCase, digits and special characters'
        },
        {
            id: 14,
            input: 'Milan1001',
            output: 'include upperCase, lowerCase, digits and special characters'
        },
        {
            id: 15,
            input: 'Milan@1001',
            output: 'strong'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = passwordCheck(test.input)
        let status = 'passed'

        if(originalOutput !== test.output) status = 'failed'
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()