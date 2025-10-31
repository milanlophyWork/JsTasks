import { array } from "../../utils/array.js"

const texts = [
    {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
        20: 'Twenty',
        30: 'Thirty',
        40: 'Fourty',
        50: 'Fifty',
        60: 'Sixty',
        70: 'Seventy',
        80: 'Eighty',
        90: 'Ninety',
        100: 'Hundred',
        1000: 'Thousand'
    }
]
function number(n){  
    if(typeof n !== 'number' || isNaN(n) || Math.round(n) !== n) return 'invalid input'

    if(n in texts[0]) {
        console.log(texts[0][n])
    }else{
        let text 
        if(n<100){
            const quotient = Math.floor(n/10)*10
            text= texts[0][quotient] + ' ' + texts[0][n%10]
            console.log(text)
        }else if(n<1000){
            const quotient = Math.floor(n/100)
            text = texts[0][quotient] + ' Hundred And '
            n= n%100
            console.log(text)
            number(n)

        }else return 'Numbers should not be greater than 1000 and negative'
    }
}
number(723)


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
            output: 'Two'
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
            input: 20, 
            output: 'Twenty'
        },
        {
            id: 10,
            input: 23,
            output:'Twenty Three'
        },
        {
            id: 11,
            input: '123',
            output: 'invalid input'
        },
        {
            id: 12,
            input: 723,
            output: 'Seven Hundred And Twenty Three'
        },
        {
            id: 13,
            input: 1001,
            output: 'Numbers should not be greater than 1000 and negative'
        },
        {
            id: 14,
            input: -3,
            output: 'Numbers should not be greater than 1000 and negative'
        },
        {
            id: 15,
            input: true,
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = number(test.input)
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