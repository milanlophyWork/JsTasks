import { array, objCheck } from "../../utils/array.js"

function objectEquality(obj1, obj2){
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' ||
        Array.isArray(obj1) || Array.isArray(obj2) || obj1 === null || obj2 === null) return 'invalid input'
    
    let passed
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    
    if(keys1.length !== keys2.length){
        return 'Not Equal'
    }else{
        if(keys1.length === 0) return 'Equal'
        keys1.forEach(key => {
            if(obj2.hasOwnProperty(key)){
                if(typeof obj1[key] !== 'object' || Array.isArray(obj1[key]) || obj1[key] === null)
                    passed = array(obj1[key], obj2[key]) // if key's value is a number, string, array, null, boolean , etc
                else passed = objCheck(obj1[key],obj2[key]) // if key's value is an obj {}
            }else return 'Not Equal'
        })
    }
    if(passed === 'passed') return 'Equal'
    else return 'Not Equal'
}
// console.log(objectEquality({a: 1, b: 2}, {b: 3, c: 4}))

function testCase(){

    const testCases = [
        {
            id: 1,
            input1: '',
            input2: {},
            output: 'invalid input'
        },
        {
            id: 2,
            input1: 1.2,
            input2: [],
            output: 'invalid input'
        },
        {
            id: 3,
            input1: {},
            input2: {a: 2},
            output: 'Not Equal'
         },
        {
            id: 4,
            input1: {a: 200, b: 100},
            input2: '',
            output: 'invalid input'
        },
        {
            id: 5,
            input1: 0/0,
            input2: {1: 'a'},
            output: 'invalid input'
        },
        {
            id: 6,
            input1: null,
            input2: {a: 10, b:20},
            output: 'invalid input'
        },
        {
            id: 7,
            input1: [],
            input2: {a: 10, b:20},
            output: 'invalid input'
        },
        {
            id: 8,
            input1: undefined,
            input2: {a: 30},
            output: 'invalid input'
        },
        {
            id: 9,
            input1: {a: 10, b: 20}, 
            input2: {c: 30},
            output: 'Not Equal'
        },
        {
            id: 10,
            input1: {},
            input2: {},
            output: 'Equal'
        },
        {
            id: 11,
            input1: {a: 10, b: 20},
            input2: {a: 10, b: 20},
            output: 'Equal'
        },
        {
            id: 12,
            input1: {a: [1,2,3], b: 20},
            input2: {a: [1,2,3], b:20},
            output: 'Equal'
        },
        {
            id: 13,
            input1: {a: {b: 2}},
            input2: {a: {b: 2}},
            output: 'Equal'
        },
        {
            id: 14,
            input1: {a: 3, b: [0,0]},
            input2: {b: [0,0], a: 3, },
            output: 'Equal'
        },
        {
            id: 15,
            input1: {a: true},
            input2: {a: false},
            output: 'Not Equal'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = objectEquality(test.input1, test.input2)
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