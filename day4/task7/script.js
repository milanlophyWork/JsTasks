import { array } from "../../utils/array.js"

function componentToHex(a){
    const hex = a.toString(16)
    if(hex.length === 1) {
        return ('0'+ hex).toUpperCase()
    }
    else{
        return hex.toUpperCase()
    } 
}
const rgbToHex = (r,g,b)=> {
    if(typeof r !== 'number' || typeof g !== 'number' || typeof b !=='number' 
       || isNaN(r) || isNaN(g)|| isNaN(b) || Math.round(r) !== r 
       || Math.round(g) !== g || Math.round(b) !== b)  return 'invalid input'

    if(r > 255 || g > 255 || b > 255) return 'invalid input'
    if(r < 0 || g < 0 || b < 0) return 'invalid input'

    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

// console.log(rgbToHex(255,165,0)) // #FFA500

function testCase(){

    const testCases = [
        {
            id: 1,
            input1: '',
            input2: 2,
            input3: 3,
            output: 'invalid input'
        },
        {
            id: 2,
            input1: 1.2,
            input2: 2,
            input3: 3,
            output: 'invalid input'
        },
        {
            id: 3,
            input1: {},
            input2: 2,
            input3: 3,
            output: 'invalid input'
         },
        {
            id: 4,
            input1: 255,
            input2: 165,
            input3: 0,
            output: '#FFA500'
        },
        {
            id: 5,
            input1: 255,
            input2: 165,
            input3: 0/0,
            output: 'invalid input'
        },
        {
            id: 6,
            input1: null,
            input2: 165,
            input3: 0,
            output: 'invalid input'
        },
        {
            id: 7,
            input1: 255,
            input2: 165,
            input3: [],
            output: 'invalid input'
        },
        {
            id: 8,
            input1: 255,
            input2: 165,
            input3: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input1: 255,
            input2: 165,
            input3: true, 
            output: 'invalid input'
        },
        {
            id: 10,
            input1: -255,
            input2: 165,
            input3: 0,
            output:'invalid input'
        },
        {
            id: 11,
            input1: 0,
            input2: 0,
            input3: 0,
            output: '#000000'
        },
        {
            id: 12,
            input1: 256,
            input2: 0,
            input3: 1,
            output: 'invalid input'
        },
        {
            id: 13,
            input1: 255,
            input2: -233,
            input3: 0,
            output: 'invalid input'
        },
        {
            id: 14,
            input1: 256,
            input2: 0,
            input3: -10,
            output: 'invalid input'
        },
        {
            id: 15,
            input1: 128*2-1,
            input2: 165,
            input3: 0,
            output: '#FFA500'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = rgbToHex(test.input1, test.input2, test.input3)
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