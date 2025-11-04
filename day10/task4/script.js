import { array } from "../../utils/array.js"

function groupAnagrams(words){
    if(!Array.isArray(words) || words.length=== 0) return 'invalid input'

    let groups ={}
    for(let i=0; i<words.length; i++){
        if(typeof words[i] !== 'string' || !words[i].trim()) return 'invalid input'
        
        let text = words[i].split('').sort().join('')
        if(!groups[text]){
            groups[text] = []
            
        }
        groups[text].push(words[i])        
    }
    let result = Object.values(groups)
    return result.sort((a,b)=> b.length-a.length)
}
console.log(groupAnagrams(['eat','tea','tan','ate','ant','bat']))

function testCases(){
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
            input: ['race', 'sea', 'car'],
            output: [['race'], ['sea'],['car']]
        },
        {
            id: 8,
            input: ['care','race','acre','dog','god','cat'],
            output: [['care', 'race', 'acre'], ['dog','god'], ['cat']]
        },
        {
            id: 9,
            input: true,
            output: 'invalid input'
        },
        {
            id: 10,
            input: [1,3,5,6],
            output: 'invalid input'
        },
        {
            id: 11,
            input: ['Hi', 1,2,3,4],
            output: 'invalid input'
        },
        {
            id: 12,
            input: [' ', '  '],
            output: 'invalid input'
        },
        {
            id: 13,
            input: ['a','A','b','c'],
            output: [['a'],['A'],['b'],['c']]
        },
        {
            id: 14,
            input: [NaN, 'hi'],
            output: 'invalid input'
        },
        {
            id: 15,
            input: ['on','no'],
            output: [['on', 'no']]
        },
    ]
    
    testCases.forEach(test => {
        let originalOutput = groupAnagrams(test.input)
        let status 
        if(Array.isArray(originalOutput)){
            originalOutput.forEach(ogItem=> {
                if(Array.isArray(ogItem)){
                    test.output.forEach(testItem => {
                        status = array(ogItem, testItem)
                    })
                }
            })
        }else{
            if(originalOutput === test.output) status = 'passed'
            else status = 'failed'
        }
    
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output Got : ${originalOutput}
        `
        console.log(display)
    }) 
}
testCases()