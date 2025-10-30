
function clone(obj){
    const duplicate = structuredClone(obj)
    console.log(duplicate, obj)
}
clone({name: 'JavaScript', country: 'US', dataTypes: ['string', 'number', 'boolean', 'object', 'null', 'undefined']})

/*
function testCases(){

    const testCases = [
        {
            id: 1,
            input: '',
            output: 'invalid input'
        },
        {
            id: 2,
            input: '123',
            output: 'invalid input'
        },
        {
            id: 3,
            input: 15/6,
            output: false
        },
        {
            id: 4,
            input: 2,
            output: true
        },
        {
            id: 5,
            input: {},
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
            input: 370,
            output: true
        },
        {
            id: 10,
            input: 0,
            output: true
        },
        {
            id: 11,
            input: 0/0,
            output: 'invalid input'
        },
        {
            id: 12,
            input: -153,
            output: false
        },
        {
            id: 13,
            input: 153.0,
            output: true
        },
        {
            id: 14,
            input: 153.1,
            output: false
        },
        {
            id: 15,
            input: 4/2,
            output: true
        }
    ]

    testCases.forEach(testCase => {
        let originalOutput = clone(testCase.input)
        let status
        if(testCase.output === originalOutput){
            status = 'passed'
        }else{
            status = 'failed'
        }
        
        let display = `
        Testcase ${testCase.id} ${status}
        Output Expected : ${testCase.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
// testCases()*/