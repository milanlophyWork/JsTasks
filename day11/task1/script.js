import { array } from "../../utils/array.js"

function calculateTotal(billAmount, taxPercentage=20){
    if(typeof billAmount !== 'number' || isNaN(billAmount) || typeof taxPercentage !== 'number' || isNaN(taxPercentage)) return 'invalid input'
    
    const taxAmount = (billAmount * taxPercentage)/ 100
    const totalBill = billAmount + taxAmount
    return totalBill
}
console.log(calculateTotal(200,10))
console.log(calculateTotal(200))


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
            input1: 200,
            output: 240
        },
        {
            id: 5,
            input1: 0/0,
            input2: 300,
            output: 'invalid input'
        },
        {
            id: 6,
            input1: null,
            input2: 20,
            output: 'invalid input'
        },
        {
            id: 7,
            input1: [],
            output: 'invalid input'
        },
        {
            id: 8,
            input1: undefined,
            input2: 30,
            output: 'invalid input'
        },
        {
            id: 9,
            input1: 20.1, 
            input2: 10,
            output: 22.11
        },
        {
            id: 10,
            input1: 30/2,
            input2: 10,
            output: 16.5
        },
        {
            id: 11,
            input1: 200,
            input2: 30,
            output: 260
        },
        {
            id: 12,
            input1: 200,
            input2: [],
            output: 'invalid input'
        },
        {
            id: 13,
            input1: 100,
            output: 120
        },
        {
            id: 14,
            input1: 100,
            input2: 0,
            output: 100
        },
        {
            id: 15,
            input1: true,
            input2: '',
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = calculateTotal(test.input1, test.input2)
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
