import { objCheck } from "../../utils/array.js"

//task3
function objInvert(obj){
    if(typeof obj !== 'object' || Array.isArray(obj) || obj=== null) return 'invalid input'

    let newObj = {}
    const newValues = Object.keys(obj)
    const newKeys = Object.values(obj)

    if(newValues.length === 0) return 'invalid input'

    for(let i= 0; i<newKeys.length;i++){
        if(typeof newKeys[i] !== 'object') newObj[newKeys[i]] = newValues[i]
        else {
            if(Array.isArray(newKeys[i]) && newKeys[i].length === 1){
                newObj[newKeys[i]] = newValues[i]
            }else return 'invalid input'
        }
    }
    return newObj
}


// console.log(objInvert({1: 'a'}))

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
            input: {1: 'a'},
            output: {'a': '1'}
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: {1: 'hi', 'hello': 'greet'}, 
            output: {'hi': '1', 'greet': 'hello'} // js convert 1 to '1'
        },
        {
            id: 10,
            input: {'abc': [9]},
            output:{[9]: 'abc'} // {'9' : 'abc'} = {[9]: 'abc'} 
        },
        {
            id: 11,
            input: {'123': []},
            output: 'invalid input'
        },
        {
            id: 12,
            input: {'123': {}},
            output: 'invalid input'
        },
        {
            id: 13,
            input: {'ab': null},
            output: 'invalid input'
        },
        {
            id: 14,
            input: {1: [1,2,3]}, // key property cannot have comma expressions.
            output: 'invalid input'
        },
        {
            id: 15,
            input: {[2]: [3]}, // js automatically converts to string using valueOf => {'3':'2'}
            output: {[3]: '2'}
        }
    ]

    testCases.forEach(test => {
        let originalOutput = objInvert(test.input)
        let status = objCheck(originalOutput, test.output)
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()

/*
function objInvert(obj){
    let newObj = {}
    const newValues = Object.keys(obj)
    const newKeys = Object.values(obj)

    for(let i= 0; i<newKeys.length;i++){
        newObj[newKeys[i]] = newValues[i]
    }
    return newObj
}*/