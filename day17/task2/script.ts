function sortByKey(arr:{[key: string] : number}[], key:string, order:string ='asc'){
    if(!Array.isArray(arr) || arr.length === 0 || typeof key !== 'string' || typeof order !== 'string') return 'invalid input'

    let sorted:object[] = []
    // let keys:string[] 
    let values:number[] = []

    for(let obj of arr){
        if(typeof obj !== 'object' || Array.isArray(obj) || obj === null) return 'invalid input'

        // keys = Object.keys(obj)
        Object.keys(obj).forEach(k=>{
            if(k===key) {
                values.push(obj[k])
            }
        })
    }
    if(values.length === 0) return 'key not found'

    if(order==='asc')values.sort()
    else if(order === 'desc') values.sort((a,b)=> b-a)

    for(let k=0; k<values.length; k++){
        sorted.push({[key]: values[k]})
    }
    return sorted
}
console.log(sortByKey([{age:30},{age: 20}], 'age', 'desc'))

function testCase(){
    const testCases = [
        {
            id: 1,
            input1: [{age:30},{age: 20}],
            key: 'age',
            order: 'asc',
            output: [{age:20}, {age: 30}]
        },
        {
            id: 2,
            input1: [{age: 40}, {name: 'Vincy'}, {age: 50}],
            key: 'age',
            order: 'desc',
            output: [{age: 50}, {age: 40}]
        },
        {
            id: 3,
            input1: [{age: 40}, {name: 'Vincy'}, {age: 50}],
            key: 5,
            output: 'invalid input'
         },
        {
            id: 4,
            input1: {},
            key: 'age',
            output: 'invalid input'
        },
        {
            id: 5,
            input1: 0/0,
            key: 'age',
            output: 'invalid input'
        },
        {
            id: 6,
            input1: [{age: 40}, {age: 30}, {age: 50}],
            key: 'age',
            order: 'asc',
            output: [{age: 30}, {age: 40}, {age: 50}]
        },
        {
            id: 7,
            input1: [{name: 'Bincy'}, {name: 'Vincy'}, {name: 'Celine'}],
            key: 'name',
            output: [{name: 'Bincy'},{name: 'Celine'}, {name: 'Vincy'}]
        },
        {
            id: 8,
            input1: [{name: 'Bincy'}, {name: 'Vincy'}, {name: 'Celine'}],
            key: 'age',
            order: 'desc',
            output: 'key not found'
        },
        {
            id: 9,
            input1: [1,2,3],
            key: 'age',
            order: 'desc',
            output: 'invalid input'
        },
        {
            id: 10,
            input1: [{name: 'Milan'}, {name: 'Helan'}, {name:'Heaven'}, {id: 4}],
            key: 'name',
            order: 'asc',
            output: [{name:'Heaven'}, {name: 'Helan'}, {name: 'Milan'},]
        },
        {
            id: 11,
            input1: [{name: 'Milan'}],
            key: 'age',
            output: 'key not found'
        },
        {
            id: 12,
            input1: [],
            key: 'name',
            output: 'invalid input'
        },
        {
            id: 13,
            input1: [[1,2,3]],
            key: 'name',
            output: 'invalid input'
        }
    ]

    testCases.forEach(test => {
        let originalOutput = sortByKey(test.input1, test.key, test.order)
        let status = 'passed'
        

        if(Array.isArray(originalOutput)){
            for(let i=0; i<originalOutput.length; i++) {
                if(typeof originalOutput[i] !== 'object'){
                    if(originalOutput[i] !== test.output) {
                        status = 'failed'
                    }
                }else{
                    if(Array.isArray(originalOutput[i]) || originalOutput[i] === null) status = 'failed'
                    
                    let keysOrg = Object.keys(originalOutput[i])
                    let keysTest = Object.keys(test.output[i])

                    if(keysOrg.length !== keysTest.length) {
                        status = 'failed'
                    }

                    keysOrg.forEach(key =>{
                        if(!test.output[i].hasOwnProperty(key) || originalOutput[i][key]!==test.output[i][key]){
                            status = 'failed'
                        }
                    })
                }       
            }
        }else{
            if(originalOutput !== test.output) status = 'failed' 
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