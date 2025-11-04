import {array} from '../../utils/array.js'

function arrangeArray(arr1, arr2, position){
    if(!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length === 0 || arr2.length === 0 || position > arr1.length) return 'invalid input'

    if(arr1[position]){
        let temp = arr1[position]
        arr1.splice(position+1,0,temp)
    }
    // arr2.forEach(item => {
    //     arr1[position].splice() = item
    // }) 
    // arr1.splice(position, 1, arr2)
    arr1[position] = arr2

    return arr1.flat()
}
console.log(arrangeArray([1, 2, 3], [4, 5, 6], 2))

function testCases(){

    const testCases = [
        {
            id: 1,
            input1: [1,2,3],
            input2: [4,5,6],
            position: 0,
            output: [4,5,6,1,2,3]
        },
        {
            id: 2,
            input1: '123',
            input2: [],
            position: 0,
            output: 'invalid input'
        },
        {
            id: 3,
            input1: true,
            input2: [1,2],
            position: 1,
            output: 'invalid input'
        },
        {
            id: 4,
            input1: [2],
            input2: 1,
            position: 1, 
            output: 'invalid input'
        },
        {
            id: 5,
            input1: {},
            input2: [4,5,6],
            position: 1,
            output: 'invalid input'
        },
        {
            id: 6,
            input1: null,
            input2: [3],
            position: 3,
            output: 'invalid input'
        },
        {
            id: 7,
            input1: [],
            input2: [1,2,3],
            position: 0,
            output: 'invalid input'
        },
        {
            id: 8,
            input1: undefined,
            input2: [],
            position: 2,
            output: 'invalid input'
        },
        {
            id: 9,
            input1: [1,2,3],
            input2: [6,4,5],
            position: 2,
            output: [1,2,6,4,5,3]
        },
        {
            id: 10,
            input1: [1,2,3],
            input2: [6,4,5],
            position: 4,
            output: 'invalid input'
        },
        {
            id: 11,
            input1: 0/0,
            input2: [3,4],
            position: 2,
            output: 'invalid input'
        },
        {
            id: 12,
            input1: [1,2,3,4],
            input2: [],
            position: 2,
            output: 'invalid input'
        },
        {
            id: 13,
            input1: [2],
            input2: [1,2],
            position: 1,
            output: [2,1,2]
        },
        {
            id: 14,
            input1: ['3', 4],
            input2: ['hi'],
            position: 1,
            output: ['3','hi',4]
        },
        {
            id: 15,
            input1: [2,2,3],
            input2: [3,[4]],
            position: 1,
            output: [2,3,[4],2,3]
        },
        {
            id: 16,
            input1: [2,[2,3]],
            input2: [3,4],
            position: 1,
            output: [2,3,4,[2,3]]
        }
    ]

    testCases.forEach(test => {
        let originalOutput = arrangeArray(test.input1, test.input2, test.position)
        let status = array(originalOutput, test.output)
        // console.log(originalOutput,test.output)
        
        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCases()