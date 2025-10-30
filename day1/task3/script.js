// MARK STATUS

const students = [
    {name: 'Alice', marks: 42},
    {name: 'Bob', marks: 67},
    {name: 'Charlie',marks: 35}
]
function details(students){
    if(!Array.isArray(students) || students.length === 0) return 'invalid input'

    let markStatus = structuredClone(students)

        markStatus.forEach(student =>{
            if(student.name && typeof student.name === 'string' && student.marks && typeof student.marks === 'number'){
                if(student.marks > 45){
                    student['status'] = 'Pass'
                }else{
                    student['status'] = 'Fail'
                }
                delete student['marks']
            }else return 'invalid input'
        })
    
    return markStatus
}
console.log('original: ',students, 'duplicate:', details(students))


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
    // {
    //     id: 7,
    //     input: [1,2,3,4,5,6],
    //     output: 9
    // },
    // {
    //     id: 8,
    //     input: [3,5,7,9,15],
    //     output: 27
    // },
    // {
    //     id: 9,
    //     input: true,
    //     output: 'invalid input'
    // },
    // {
    //     id: 10,
    //     input: false,
    //     output: 'invalid input'
    // },
    // {
    //     id: 11,
    //     input: ['Hi', 1,2,3,4],
    //     output: 3
    // },
    // {
    //     id: 12,
    //     input: [false, 'hello', [3, 2], {} ],
    //     output: 'Array lacks multiples of three'
    // },
    // {
    //     id: 13,
    //     input: [-1, -2, 0,-3],
    //     output: -3
    // },
    // {
    //     id: 14,
    //     input: [2,4,8,10],
    //     output: 'Array lacks multiples of three'
    // },
    // {
    //     id: 15,
    //     input: [0,0,0,0,0],
    //     output: 'Array lacks multiples of three'
    // },
]

// testCases.forEach(testCase => {
//     let originalOutput = details(testCase.input)
//     let status
//     console.log(originalOutput)
   
//     if(JSON.stringify(testCase.output) === JSON.stringify(originalOutput)){
//         status = 'passed'
//     }else{
//         status = 'failed'
//     }
//     console.log(`Testcase ${testCase.id} ${status}`)
// }) 