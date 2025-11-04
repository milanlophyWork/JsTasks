import { array, objCheck } from "../../utils/array.js"

function deepClone(obj){
    if(typeof obj !== 'object' || Array.isArray(obj) || obj === null || Object.keys(obj).length === 0) return 'invalid input'

    let newObj = structuredClone(obj)
    return newObj
}
let obj1 = {
    1: 'item1',
    2: {
        2.1: 'item 2.1',
        2.2: 'item 2.2'
    },
    3: 'item 3'
}
// console.log(deepClone(obj1), obj1)

function testCase(){

    const testCases = [
        {
            id: 1,
            input: '',
            output: 'invalid input'
        },
        {
            id: 2,
            input: 1.2,
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
            input: obj1, 
            output: {
                1: 'item1',
                2: {
                    2.1: 'item 2.1',
                    2.2: 'item 2.2'
                },
                3: 'item 3'
            }
        },
        {
            id: 10,
            input: {a: 1, b: [4,5,[8]], c: {'abc': 1}},
            output: {a: 1, b: [4,5,[8]], c: {'abc': 1}}
        },
        {
            id: 11,
            input: {1: 2, 2: 3, 3: 4},
            output:  {1: 2, 2: 3, 3: 4}
        },
        {
            id: 12,
            input: {1: 'abc', 2: 'def'},
            output: {1: 'abc', 2: 'def'}
        },
        {
            id: 13,
            input: {[1]: [1,2,3]},
            output: {1: [1,2,3]}
        },
        {
            id: 14,
            input: {'c': 1, 2: '@'},
            output: {'c': 1, 2: '@'}
        },
        {
            id: 15,
            input: true,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = deepClone(test.input)
        let status = 'passed'
        
        if(typeof originalOutput !== 'object'){
            if(originalOutput !== test.output) {
                return status = 'failed'
            }
        }else{
            if(Array.isArray(originalOutput) || originalOutput === null) return status = 'failed'
            
            let keysOrg = Object.keys(originalOutput)
            let keysTest = Object.keys(test.output)

            if(keysOrg.length !== keysTest.length) {
                return status = 'failed'
            }

            keysOrg.forEach(key =>{
                if(test.output.hasOwnProperty(key)){
                    if(typeof originalOutput[key]!== 'object'){
                        if(originalOutput[key]!==test.output[key]) status = 'failed'
                    }else{
                        if(Array.isArray(originalOutput[key] || originalOutput[key] === null))
                            status = array(originalOutput[key], test.output[key])
                        else status = objCheck(originalOutput[key], test.output[key])
                    }
                    
                }else status = 'failed'
            })
        }

        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()
