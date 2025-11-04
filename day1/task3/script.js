// MARK STATUS
import { objCheck } from '../../utils/array.js'

const students = [
    {name: 'Alice', marks: 42},
    {name: 'Bob', marks: 67},
    {name: 'Charlie',marks: 35}
]
function details(students){
    if(!Array.isArray(students) || students.length === 0) return 'invalid input'

    let markStatus = structuredClone(students)
        for(let student of markStatus){
            if(student.name && typeof student.name === 'string' && typeof student.marks === 'number'){
                if(student.marks > 45){
                    student['status'] = 'Pass'
                }else{
                    student['status'] = 'Fail'
                }
                
            }else return 'invalid input'

            delete student['marks']
        }
    return markStatus
}
// console.log('original: ',students, 'duplicate:', details(students))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [
                {name: 'Alice', marks: 42},
                {name: 'Bob', marks: 67},
                {name: 'Charlie',marks: 35}
            ],
            output: [
                {name: 'Alice', status: 'Fail'},
                {name: 'Bob', status: 'Pass'},
                {name: 'Charlie',status: 'Fail'}
            ]
        },
    
        {
            id: 2,
            input: [
                { marks: 42},
                {name: 'Bob', marks: 67},
                {name: '',marks: 35}
            ],
            output:'invalid input'
        },
        {
            id: 3,
            input:[
                {name: '', marks: 42},
                {name: 'Bob', marks: 67},
                {name: '',marks: 35}
            ],
            output:'invalid input'
        },
        {
            id: 4,
            input: [
                {name: 'Alice', marks: ''},
                {name: 'Bob', marks: 67},
                {name: 'Charlie',marks: 35}
            ],
            output: 'invalid input'
        },
        {
            id: 5,
            input: [
                {name: 'Alice', marks: 42},
                {name: 'Bob', marks: {}},
                {name: '',marks: 35}
            ],
            output: 'invalid input'
        },
        {
            id: 6,
            input: [
                {name: 'Alice', marks: 42},
                'Hello',
                {name: '',marks: 35}
            ],
            output: 'invalid input'
        },
        {
            id: 7,
            input: [
                {name: 'Alice', marks: 42},
                {name: 'Bob', marks: 50},
                {name: '',marks: '35'}
            ],
            output: 'invalid input'
        },
        {
            id: 8,
            input: [3,5,7,9,15],
            output: 'invalid input'
        },
        {
            id: 9,
            input: [{name: 'Alice', marks: 0}],
            output: [{name: 'Alice', status: 'Fail'}]
        },
        {
            id: 10,
            input: false,
            output: 'invalid input'
        },
        {
            id: 11,
            input: null,
            output: 'invalid input'
        },
        {
            id: 12,
            input: [false, 'hello', [3, 2], {} ],
            output: 'invalid input'
        },
        {
            id: 13,
            input: [{}],
            output: 'invalid input'
        },
        {
            id: 14,
            input: 23,
            output: 'invalid input'
        },
        {
            id: 15,
            input: {a: [1,2]},
            output: 'invalid input'
        },
    ]

    testCases.forEach(test => {
        let originalOutput = details(test.input)
        let status = 'passed'
        if(!Array.isArray(originalOutput) || originalOutput.length === 0) {
            if(originalOutput !== test.output) status = 'failed'
        }
        else{
            for(let ogItem of originalOutput){
                if(typeof ogItem !== 'object' || Array.isArray(ogItem) || ogItem === null) status = 'failed'
                else {
                        test.output.forEach(testItem => {
                        status = objCheck(ogItem, testItem)
                    })
                }
                
            }
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