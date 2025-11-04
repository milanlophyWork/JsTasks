import { array, objCheck } from "../../utils/array.js"

function combineObject(obj1, obj2){
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object' || 
        Array.isArray(obj1) || Array.isArray(obj2) || 
        obj1 === null || obj2 === null) return 'invalid input'

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    let newObj = {}    

    keys1.forEach(key => {
        newObj[key] = obj1[key]
    })
    keys2.forEach(key => {
        newObj[key] = obj2[key]
    })
    return newObj
}
// console.log(combineObject({a:1, b:2}, {b: 3, c:4}))

function testCase(){

    const testCases = [
        {
            id: 1,
            input1: '',
            input2: 3,
            output: 'invalid input'
        },
        {
            id: 2,
            input1: 1.2,
            input2: '',
            output: 'invalid input'
        },
        {
            id: 3,
            input1: {},
            input2: '',
            output: 'invalid input'
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
            output: {a: 10, b:20, c: 30}
        },
        {
            id: 10,
            input1: {},
            input2: {},
            output: {}
        },
        {
            id: 11,
            input1: {a: 10, b:20},
            input2: {b: 30, a: 20},
            output: {a: 20, b: 30}
        },
        {
            id: 12,
            input1: {a: [1,2,3], b: 20},
            input2: {a: [1,4], b:20},
            output: {a: [1,4], b:20}
        },
        {
            id: 13,
            input1: {a: {b: 2}},
            input2: {a: [1,4], b:20},
            output: {a: [1,4], b: 20}
        },
        {
            id: 14,
            input1: {a: 3},
            input2: {a: {A: 'hi'}},
            output: {a: {A: 'hi'}}
        },
        {
            id: 15,
            input1: {a: true},
            input2: {b: false},
            output: {a: true, b: false}
        }
    ]

    testCases.forEach(test => {
        let originalOutput = combineObject(test.input1, test.input2)
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
                    if(typeof originalOutput[key] !== 'object'){
                        if(originalOutput[key]!==test.output[key])
                            status = 'failed'
                    }else{
                        if(Array.isArray(originalOutput[key]) || originalOutput[key] === null)
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