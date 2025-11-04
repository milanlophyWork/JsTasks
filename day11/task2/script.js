import { array } from "../../utils/array.js"

function getTicketPrice(age){
    if(typeof age !== 'number' || isNaN(age) || age === 0 || age >130) return 'invalid input'
    
    let price
    if(age<=12) price = 10
    else if(age>12 && age <= 59) price = 20
    else price = 15
    return `Ticket price is $${price}`
}
console.log(getTicketPrice(10))
console.log(getTicketPrice(15))
console.log(getTicketPrice(65))


function testCase(){

    const testCases = [
        {
            id: 1,
            input1: '',
            output: 'invalid input'
        },
        {
            id: 2,
            input1: 1.5,
            output: 'Ticket price is $10'
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
            output: 'invalid input'
        },
        {
            id: 5,
            input1: 0/0,
            output: 'invalid input'
        },
        {
            id: 6,
            input1: null,
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
            output: 'invalid input'
        },
        {
            id: 9,
            input1: 20, 
            output: 'Ticket price is $20'
        },
        {
            id: 10,
            input1: 30/2,
            output: 'Ticket price is $20'
        },
        {
            id: 11,
            input1: 60,
            output: 'Ticket price is $15'
        },
        {
            id: 12,
            input1: 59,
            output: 'Ticket price is $20'
        },
        {
            id: 13,
            input1: 100,
            output: 'Ticket price is $15'
        },
        {
            id: 14,
            input1: 0,
            output: 'invalid input'
        },
        {
            id: 15,
            input1: true,
            input2: '',
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = getTicketPrice(test.input1, test.input2)
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
