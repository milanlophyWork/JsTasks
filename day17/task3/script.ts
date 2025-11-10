import { array, objCheck } from "../../utils/array.js"

function checkEqual(original:number[], test:number[]){
    let status = 'passed'
    
    if(typeof original !== typeof test) return 'not equal'
    else{
        if(typeof original === 'object'){
            if(Array.isArray(original) && original.length !== 0 ) status = array(original, test)
            else if(original === test === null) status = 'passed'
            else status = objCheck(original, test)
        }else {
            if(original !== test) status = 'failed'
        }
    }
   
    if(status==='passed') return 'equal'
    else return 'not equal'
}
console.log(checkEqual([1,2,3,'hi'], [1,2,3]))


function testCase(){
    const testCases = [
        {
            id: 1,
            input1: [1,2,3],
            input2: [1,2,3],
            output: 'equal'
        },
        {
            id: 2,
            input1: [{age: 40}, {name: 'Vincy'}, {age: 50}],
            input2: [1,2,3],
            output: 'not equal'
        },
        {
            id: 3,
            input1: [{age: 40}, {name: 'Vincy'}, {age: 50}],
            input2: [{age: 40}, {name: 'Vincy'}, {age: 50}],
            output: 'equal'
         },
        {
            id: 4,
            input1: 3,
            input2: 4,
            output: 'not equal'
        },
        {
            id: 5,
            input1: {'a': 3, 'b': 4},
            input2: {'a': 3, 'b': 4},
            output: 'equal'
        },
        {
            id: 6,
            input1: {'a': 3, 'b': 4},
            input2: {'a': 3, 'b': 4, c: 'hi'},
            output: 'not equal'
        },
        {
            id: 7,
            input1: 'hello',
            input2: 'hello',
            output: 'equal'
        },
        {
            id: 8,
            input1: 'hello',
            input2: 'Hello',
            output: 'not equal'
        },
        {
            id: 9,
            input1: {x:1,y:{z:2}},
            input2: {x:1,y:{z:2}},
            output: 'equal'
        },
        {
            id: 10,
            input1:  {x:1,y:{z:2}},
            input2:  {x:1,y:{z:3}},
            output: 'not equal'
        },
        {
            id: 11,
            input1: true,
            input2: false,
            output: 'not equal'
        },
        {
            id: 12,
            input1: true,
            input2: true,
            output: 'equal'
        },
        {
            id: 13,
            input1: [[1,2,3]],
            input2: [[1,2,3]],
            output: 'equal'
        },
        {
            id: 14,
            input1: 5,
            input2: 'hi',
            output: 'not equal'
        },
        {
            id: 15,
            input1: 5,
            input2: 5,
            output: 'equal'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = checkEqual(test.input1, test.input2)
        let status = 'passed'

        console.log(originalOutput, test.output)

        if(originalOutput !== test.output) return 'failed'
        
    /*
        if(Array.isArray(originalOutput)){
            for(let i=0; i<originalOutput.length; i++) {
                if(typeof originalOutput[i] !== 'object'){
                    if(originalOutput[i] !== test.output) {
                        status = 'failed'
                    }
                }else{
                    if(Array.isArray(originalOutput[i]) || originalOutput[i] === null) status = 'failed'
                    
                    let keysOrg = Object.keys(originalOutput[i])
                    let keysTest = Object.keys(test.output[i])

                    if(keysOrg.length !== keysTest.length) {
                        status = 'failed'
                    }

                    keysOrg.forEach(key =>{
                        if(!test.output[i].hasOwnProperty(key) || originalOutput[i][key]!==test.output[i][key]){
                            status = 'failed'
                        }
                    })
                }       
            }
        }else{
            if(originalOutput !== test.output) status = 'failed' 
        }*/

        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()