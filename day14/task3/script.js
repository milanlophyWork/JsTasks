import { array } from "../../utils/array.js"

function reverseVowels(str){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'

    let vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
    let index = new Set()
    let newStr = []

    for(let i=0; i<str.length; i++){
        vowels.forEach(item => {
            if(item === str[i]) index.add(str.indexOf(str[i]))
        })
        newStr.push(str[i])
    }
    index = [...index]
    let rev = [...index].reverse()
    console.log(index, rev)

    for(let i=0; i<str.length; i++){
        for(let j=0; j<index.length; j++){
            if(str[index[j]] === str[i]){
                newStr.splice(index[j], 1, str[rev[j]])
            }else  continue
        }
    }
    return newStr.join('')
}
// console.log(reverseVowels('IceCreAm'))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: 'IceCreAm',
            output: 'AceCreIm'
        },
        {
            id: 2,
            input: 'aabb',
            output: 'aabb'
        },
        {
            id: 3,
            input: '',
            output: 'invalid input'
         },
        {
            id: 4,
            input: {},
            output: 'invalid input'
        },
        {
            id: 5,
            input: 0/0,
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
            input: 3,
            output: 'invalid input'
        },
        {
            id: 10,
            input: '  i  ',
            output: '  i  '
        },
        {
            id: 11,
            input: ' ',
            output: 'invalid input'
        },
        {
            id: 12,
            input: 'aeiou',
            output: 'uoiea'
        },
        {
            id: 13,
            input: true,
            output: 'invalid input'
        },
        {
            id: 14,
            input: '1a2e3i4o5',
            output: '1o2i3e4a5'
        },
        {
            id: 15,
            input: '111222',
            output: '111222'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = reverseVowels(test.input)
        let status = array(originalOutput, test.output)
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()