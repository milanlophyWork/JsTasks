// import { nestedArr } from '../../utils/array.js'

export function sortMixedNested(arr: [number[]][]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let sorted: [number[]][] = arr.flat(Infinity).sort()
    let flag: number = 0
    
    function sorting(arr: [number[]][]){
        for(let i=0; i<arr.length; i++){
            if(typeof arr[i] !== 'number' && !Array.isArray(arr[i])) flag = 1

            if(Array.isArray(arr[i])) sorting(arr[i])
            else {
                arr[i] = sorted[0]
                sorted.splice(0,1)
            }
        }
        return flag === 0 ? arr : 'invalid input'
    }
    return sorting(arr)
}
// console.log(sortMixedNested([3,[2, [5,1]], 4]))

/*
function testCase(){
    let testCases = [
        {
            id: 1,
            input: [3,[2, [5,1]], 4],
            output: [1,[2, [3,4]],5]
        },
        {
            id: 2,
            input: [3,2,5,1,4],
            output: [1,2,3,4,5]
        },
        {
            id: 3,
            input: [3,[2, [5,[1]]], 4],
            output: [1,[2, [3,[4]]],5]
        },
        {
            id: 4,
            input: [1,[1, [1,1]], 1],
            output: [1,[1, [1,1]],1]
        },
        {
            id: 5,
            input: [1,[2, [3,4]], 5],
            output: [1,[2, [3,4]],5]
        },
        {
            id: 6,
            input: [0,[2, [0,1]], 0],
            output: [0,[0, [0,1]],2]
        },
        {
            id: 7,
            input: [-3,[2,[], [-5,1]], 4],
            output: [-3,[-5,[], [1,2]],4]
        },
        {
            id: 8,
            input: {},
            output: 'invalid input'
        },
        {
            id: 9,
            input: '50',
            output: 'invalid input'
        },
        {
            id: 10,
            input: null,
            output: 'invalid input'
        },
        {
            id: 11,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 12,
            input: 4,
            output: 'invalid input'
        },
        {
            id: 13,
            input: [],
            output: 'invalid input'
        },
        {
            id: 14,
            input: true,
            output: 'invalid input'
        },
        {
            id: 15,
            input: [-3,['2',[], [-5,1]], 4],
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = sortMixedNested(test.input)
        let status = nestedArr(originalOutput, test.output)

        let display = `
        Testcase ${test.id} ${status}
        Output Expected : ${test.output}
        Output got: ${originalOutput}
        `
        console.log(display)
    }) 
}
testCase()*/