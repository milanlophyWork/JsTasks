import { array } from "../../utils/array.js"

function anagrams(words){
    
    if(!Array.isArray(words) || words.length === 0) return 'invalid input'
    
    let groups = {}
    for(let i=0 ;i<words.length; i++){

        if(typeof words[i] !== 'string' || !words[i].trim()) return 'invalid input'

        let sorted = words[i].split('').sort().join('')
        if(!groups[sorted]){ // checks if sorted word let 'acer' present in obj groups as a key if not set acer: []
            groups[sorted] = []
        }
        groups[sorted].push(words[i]) // then push original word to corresponding key: acer: ['care','race','acre'] 
        
    }
    let result = Object.values(groups) // return values of the obj 'groups' as an array. Object.values is a js built in method that takes an obj as input and returns an array with values of obj(not keys)
    return result
}
// console.log(anagrams((['care','race','acre','dog','god','cat'])))

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

testCases.forEach(testCase => {
    let originalOutput = anagrams(testCase.input)
    let status 
    if(Array.isArray(originalOutput)){
        originalOutput.forEach(ogItem=> {
            if(Array.isArray(ogItem)){
                testCase.output.forEach(testItem => {
                    status = array(ogItem, testItem)
                })
            }
        })
    }else{
        if(originalOutput === testCase.output) status = 'passed'
        else status = 'failed'
    }

    let display = `
    Testcase ${testCase.id} ${status}
    Output Expected : ${testCase.output}
    Output Got : ${originalOutput}
    `
    console.log(display)
}) 

 /*
        let mySet = new Set()
        let itemsInArr1 = 0
        let itemsInArr2 = 0
        let setSize = 0
        originalOutput.forEach(item =>{
            if(Array.isArray(item)){
                item.forEach(str => {
                    mySet.add(str)
                    itemsInArr1++ 
                })   
            }
        })
        setSize = mySet.size

            testCase.output.forEach(item => {
                item.forEach(str => {
                    itemsInArr2++
                    mySet.add(str) // Adding items of second array
                })
                
            })  
        
        // possibilities :: 1) a1: [1,2,3] a2: [2,3,4] s1:{1,2,3} s2:{1,2,3,4} 2) a1: [1,2,3] a2:[1,2,3] s1: {1,2,3} s2: {1,2,3} 3) a1: [1,2,2] a2: [1,2,3] s1: {1,2} s2: {1,2,3}
        if(itemsInArr1 === itemsInArr2 === mySet.size){ // checking no. of items in array 1 and array 2 and mySet size are same. if same we need to ensure no duplicates Eg: arr1 = [1,2,2]  arr2 = [1,2,3]  set = {1,2,3}  
            if(setSize === mySet.size) status = 'passed' // checking if myset size after adding arr2 is same to set size before. // in above eg: set at first is {1,2} set at second is {1,2,3} hence duplicates are avoided.
            else status ='failed'
        }else {
            status= 'failed'
        }*/