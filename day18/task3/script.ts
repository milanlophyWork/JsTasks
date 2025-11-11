import { array } from "../../utils/array.js"

function pipe(...fns: [(...x: number[])=> number]){
    if(fns.length === 0) return 'invalid input'
    for(let item of fns) if(typeof item !== 'function') return 'invalid input'
    
    let value:number
    
    return function composition(...x: number[]){
        let first = fns[0](...x)

        for(let i=0; i<fns.length; i++){                
                if(fns[i+1]) {
                    value = fns[i+1](first)
                    first = value
                }
        }
        return fns.length === 1 ? first : value
    }
}
const add5 = (x:number=0) => x+5
const multiply3 = (x:number=1)=> x*3
// const piped = pipe(add5, multiply3)
const piped = pipe(3)
console.log(piped(5))

const multiply = (x:number=1, y:number=1)=> x*y


function testCase(){
    const testCases = [
        {
            id: 1,
            input1: [add5,multiply3],
            input2: [5],
            output: 30
        },
        {
            id: 2,
            input1: [multiply3,add5],
            input2: [5],
            output: 20
        },
        {
            id: 3,
            input1: [multiply3],
            input2: [5],
            output: 15
         },
        {
            id: 4,
            input1: [multiply3,add5, multiply3, add5],
            input2: [5],
            output: 65
        },
        {
            id: 5,
            input1: [multiply3,add5],
            input2: [5],
            output: 20
        },
        {
            id: 6,
            input1: [3],
            input2: [5],
            output: 'invalid input'
        },
        {
            id: 7,
            input1: [],
            input2: [5],
            output: 'invalid input'
        },
        {
            id: 8,
            input1: [multiply3,add5],
            input2: [10],
            output: 35
        },
        {
            id: 9,
            input1: [add5],
            input2: [10],
            output: 15
        },
        {
            id: 10,
            input1: [multiply3,add5],
            input2: [0],
            output: 5
        },
        {
            id: 11,
            input1: [multiply3,add5],
            input2: [-3],
            output: -4
        },
        {
            id: 12,
            input1: [multiply,add5],
            input2: [3,4],
            output: 17
        },
        {
            id: 13,
            input1: [multiply3,add5,multiply],
            input2: [10],
            output: 35
        },
        {
            id: 14,
            input1: [multiply],
            output: 1
        },
        {
            id: 15,
            input1: [multiply,add5],
            output: 6
        }
    ]

    testCases.forEach(test => {
        let fn = pipe(...test.input1)
        let originalOutput  

        if(typeof fn === 'function') {
            originalOutput = fn(...test.input2)
        }

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