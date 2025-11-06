import { array } from "../../utils/array.js"

function addZero(matrix){
    if(!Array.isArray(matrix) || matrix.length === 0) return 'invalid input'
    let row = []
    let column = []
    let length 

    for(let i=0; i<matrix.length; i++){
        length = matrix[i].length
        if(!Array.isArray(matrix[i]) || matrix[i].length === 0 ) return 'invalid input'

        for(let j=0; j<matrix[i].length; j++){
            if(matrix[i][j] === 0){
                row.push(i)
                column.push(j)         
            }
        }    
    }
    for(let i=0; i<matrix.length; i++){
        if(matrix[i].length !== length) return 'not square matrix'

        for(let j=0; j<matrix[i].length; j++){
            if(matrix[i][j] === 0){
                matrix[i] = Array(matrix[i].length)
                matrix[i].fill(0) 
            }
        }
        column.forEach(val=> {
        matrix[i][val] = 0
        })
    }
   
    return matrix
}
// console.log(addZero([[1,1,1], [1,0,1], [1,1,1]]))
// console.log(addZero([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [[1,1,1], [1,0,1], [1,1,1]],
            output: [[1,0,1], [0,0,0], [1,0,1]]
        },
        {
            id: 2,
            input: [[0,1,2,0],[3,4,5,2],[1,3,1,5]],
            output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
        },
        {
            id: 3,
            input: [0,1,2,3,4,5],
            output: 'invalid input'
         },
        {
            id: 4,
            input: {},
            output: 'invalid input'
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
            input: 3,
            output: 'invalid input'
        },
        {
            id: 10,
            input: [[],[]],
            output: 'invalid input'
        },
        {
            id: 11,
            input: [[0,4,7],[7,0,8],[5,8,0]],
            output: [[0,0,0],[0,0,0],[0,0,0]]
        },
        {
            id: 12,
            input: [[1,2,3], [1,2]],
            output: 'not square matrix'
        },
        {
            id: 13,
            input: true,
            output: 'invalid input'
        },
        {
            id: 14,
            input: [[1,2,3], [4,5,6]],
            output: [[1,2,3], [4,5,6]]
        },
        {
            id: 15,
            input: [[0.5, 1/2], [-8, 6]],
            output: [[0.5, 1/2], [-8, 6]]
        }
    ]

    testCases.forEach(test => {
        let originalOutput = addZero(test.input)
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