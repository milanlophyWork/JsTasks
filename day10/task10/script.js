/*
function longestCommonPrefix(arr){
    let sorted = arr.sort()
    let myObj = {}
    let result = ''
    sorted.forEach((item) => {

        for(let i=0; i<item.length; i++){
            if(!myObj[item[i]]){
                myObj[item[i]] = []
            }
            if(myObj[item[i]] !== item) myObj[item[i]].push(item)

            if(myObj[item[i]].length === sorted.length){
                result += item[i]
            }
        }
       
    })
    console.log(result)
} */

function longestCommonPrefix(strings){
    if(!Array.isArray(strings) || strings.length === 0) return 'invalid input'

    let prefix = strings[0]
    for(let i=0; i< strings.length; i++){
        if(typeof strings[i] !== 'string' || !strings[i].trim() && strings[i] === strings[strings.length-1]) return 'invalid input'

        while(strings[i].indexOf(prefix) !== 0){ // checks if current string starts with prefix
            prefix = prefix.slice(0,-1) // removes last charecter on each iteration
            if(prefix === '') return ''
        }
    }
    
    return prefix
}
console.log(longestCommonPrefix(['flower','flow','flight']))
console.log(longestCommonPrefix(['dog','racecar','car']))


function testCase(){

    const testCases = [
        {
            id: 1,
            input: ['flower','flow','flight'],
            output: 'fl'
        },
        {
            id: 2,
            input: '',
            output: 'invalid input'
        },
        {
            id: 3,
            input: ['c'],
            output: 'c'
        },
        {
            id: 4,
            input: [''],
            output: ''
        },
        {
            id: 5,
            input: 20,
            output: 'invalid input'
        },
        {
            id: 6,
            input: ['', 'cat', 'camel'],
            output: ''
            
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
            input: ['hi', 'hi'],
            output: 'hi'
            
        },
        {
            id: 12,
            input: [' cat ', 'camel'],
            output: 'ca'
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
        let originalOutput = longestCommonPrefix(test.input)
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