import {array} from '../../utils/array.js'

// All permutations of a string 
function getPermutations(str){
    if(typeof str !== 'string' || !str.trim()) return 'invalid input'

    if(str.length <= 1) return [str]

    let permutations = []
    for(let i=0; i<str.length; i++){
        const currentChar = str[i]
        const remaining = str.slice(0, i) + str.slice(i+1) // slice(start, end) includes characters from start index up to end not including end. (slice(0) everything as no end specified, slice(1) starts from 1 till end, slice(0,1) starts at 0 end before 1 ie only the 0th char)
        console.log(str.slice(0),str.slice(0,1),remaining)
        const remainingPerms = getPermutations(remaining)

        for(let perm of remainingPerms){
            permutations.push(currentChar + perm)
        }
        console.log(permutations)
    }
    return permutations
}
console.log(getPermutations('abc'))

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
            input: 2,
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
            input: ' ', 
            output: 'invalid input'
        },
        {
            id: 10,
            input: 'abc',
            output:['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
        },
        {
            id: 11,
            input: '123',
            output: ['123', '132', '213', '231', '312', '321']
        },
        {
            id: 12,
            input: 'a',
            output: ['a']
        },
        {
            id: 13,
            input: 'ab',
            output: ['ab', 'ba']
        },
        {
            id: 14,
            input: 'aa',
            output: ['aa', 'aa']
        },
        {
            id: 15,
            input: 'aba',
            output: ['aba', 'aab', 'baa', 'baa', 'aab', 'aba']
        }
    ]

    testCases.forEach(test => {
        let originalOutput = getPermutations(test.input)
        let status = array(originalOutput, test.output)
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}

// testCase()