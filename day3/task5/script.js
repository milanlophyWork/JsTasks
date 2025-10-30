function calculateSum(...num){
    for(let value of num) {
        if(typeof value !== 'number' || isNaN(value)) return 'invalid input'
    }
    const sum = num.reduce((acc, curr)=> {
        // if(typeof acc !== 'number' || isNaN(acc) || typeof curr !== 'number' || isNaN(curr)) return 'invalid input'
        if(curr) return acc+curr
        else return acc // no curr => 1 item or end of num array
    })
    return sum
}
console.log(calculateSum(1,2,3,4))
// console.log(calculateSum( 1,2))


function testCases(){

    const testCases = [
        {
            id: 1,
            input: [''], // spread operator is used so input is gven inside array , as spread operator stores every values inside an array. let values = 1,2,3,4 then ...num => [1,2,3,4]
            output: 'invalid input'
        },
        {
            id: 2,
            input: ['123'], // similarly ...testCase.input => [val1, val2,...]. So here input item is specified inside an array. Here actual input is '123'
            output: 'invalid input'
        },
        {
            id: 3,
            input: [15/6],
            output: 15/6
        },
        {
            id: 4,
            input: [2,3,5],
            output: 10
        },
        {
            id: 5,
            input: [{}],
            output: 'invalid input'
        },
        {
            id: 6,
            input: [null],
            output: 'invalid input'
        },
        {
            id: 7,
            input: [[]],
            output: 'invalid input'
        },
        {
            id: 8,
            input: [undefined],
            output: 'invalid input'
        },
        {
            id: 9,
            input: [0,0,0,0],
            output: 0
        },
        {
            id: 10,
            input: [0],
            output: 0
        },
        {
            id: 11,
            input: [0/0],
            output: 'invalid input'
        },
        {
            id: 12,
            input: [-1,5,3],
            output: 7
        },
        {
            id: 13,
            input: [1.5,3.5, 10, 4, 0],
            output: 19
        },
        {
            id: 14,
            input: [[6,7]],
            output: 'invalid input'
        },
        {
            id: 15,
            input: [4/2],
            output: 2
        }
    ]

    testCases.forEach(testCase => {
        let originalOutput = calculateSum(...testCase.input) 
        let status = 'passed'
        if(testCase.output !== originalOutput) status = 'failed'
        
        let display = `
        Testcase ${testCase.id} ${status}
        Output Expected : ${testCase.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCases()