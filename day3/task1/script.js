function interpretSum(arr){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    arr.forEach(item => {
        if(!Array.isArray(item) || arr.length === 0) return 'invalid input'
        else{
            item.forEach(num => {
                if(typeof num !== 'number' || isNaN(num)) return 'invalid input'
            })
        }
        
    })

    let str = toString(arr)
    let newArr
    if(Array.isArray(str)) newArr = toNum(str)
    else return str

    return newArr.reduce((acc,curr)=> acc+curr)
}
// console.log(interpretSum([[1,2,3], [0,7]]))

function toString(arr){
    let str = []
    let flag = 0
   
    for(let item of arr){
      
        if(Array.isArray(item)){
            if(item.length !== 0){
                item.forEach(num => {
                    if(typeof num !== 'number' || isNaN(num)) {
                        flag = 1
                        return
                    }
                })
            }else{
                continue
            }
           
            
            let numTxt = `${item[0]}`
            item.reduce((acc,curr)=> {
                if(typeof curr !== 'number') {
                    flag = 1
                    return 
                }
                numTxt+=curr
            }) // numTxt to make string
           
            str.push(numTxt)
        }else flag = 1
    }
    if(flag === 0 && str.length !== 0) return str 
    else return 'invalid input'
}
// console.log(toString([[1,2,3], [0,7]])) // ['123','07']
    
function toNum(arr){
    let num = []
    arr.forEach(item=> {
        num.push(Number(item))
    })  

    return num
}

function testCase(){
    const testCases = [
        {
            id: 1,
            input: [[1,2,3],[0,7]],
            output: 130
        },
        {
            id: 2,
            input: [],
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
            output: 'invalid input'
        },
        {
            id: 5,
            input: 1/0,
            output: 'invalid input'
        },
        {
            id: 6,
            input: null,
            output: 'invalid input'
        },
        {
            id: 7,
            input: ['hi', 'hello'],
            output: 'invalid input'
        },
        {
            id: 8,
            input: undefined,
            output: 'invalid input'
        },
        {
            id: 9,
            input: [' ', '   ','  '],
            output: 'invalid input'
        },
        {
            id: 10,
            input: [[1,2],['hi',3]],
            output: 'invalid input'
        },
        {
            id: 11,
            input:[ ['hi'],[3,4,5]],
            output: 'invalid input'
        },
        {
            id: 12,
            input: [['15'], ['1000', '0']],
            output: 'invalid input'
        },
        {
            id: 13,
            input: [1/0, 0/0],
            output: 'invalid input'
        },
        {
            id: 14,
            input: [[1,2],[1,0],[2,0]],
            output: 42
        },
        {
            id: 15,
            input: [[], []],
            output: 'invalid input'
        },
        {
            id: 16,
            input: [[1,2], []],
            output: 12
        },
        {
            id: 17,
            input: [[], [], [1,2,4]],
            output: 124
        },
        {
            id: 18,
            input: [[1,0], [], [1,7]],
            output: 27
        }
    ]

    testCases.forEach(test => {
        let originalOutput = interpretSum(test.input)
        let status = 'passed'
        if(originalOutput !== test.output) status = 'failed'
        
        let display = `
        Testcase ${test.id} ${status}
        Expected output : ${test.output}
        Output got : ${originalOutput}
        `
        console.log(display)
    })
}

testCase()

/*
function interpretSum(arr){
    let str = toString(arr)
    const newArr = toNum(str)
    return newArr.reduce((acc,curr)=> acc+curr)
}
console.log(interpretSum([[1,2,3], [0,7]]))

function toString(arr){
    let str = []
    for(let item of arr){
        if(Array){
            let numTxt = `${item[0]}`
            str.push(item.reduce((acc,curr)=> numTxt+=curr)) // numTxt to make string
        }
    }
    return str    
}
console.log(toString([[1,2,3], [0,7]])) // ['123','07']

function toNum(arr){
    let num = []
    arr.forEach(item=> {
        num.push(Number(item))
    })  

    return num
}
console.log(toNum(['123','07'])) // [123, 7]
*/