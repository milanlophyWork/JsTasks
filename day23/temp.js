function addSeparator(num){
    let numStr = String(num)
    if(numStr.length <=3) return num
    else{
        let newNum = numStr.slice(0,-3)
        let count = 0
        console.log(typeof newNum)
        for(let char of newNum){
            count++
            if(count === 2) {
                count = 0
                let currIndex = newNum.indexOf(char)
                
            }
        }
        return newNum
    }
    
}
// console.log(addSeparator(12234))

function twoArrays(arr1, arr2){
    let intersection = []
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])) intersection.push(arr1[i])
    }
    return intersection.length === 0 ? 'No common elements' : intersection
}
// console.log(twoArrays([1,2,3],[2,3,4]))

function findPath(obj, key){
    if(typeof obj !== 'object' || Array.isArray(obj) || obj === null) return 'invalid input'

    let path = []
    let keys = Object.keys(obj)

    function findKeys(obj){

    
    keys.forEach(k => {

        // console.log(obj[k])
        if(typeof obj[k] === 'object' || !Array.isArray(obj[k]) || obj[k] !== null) {
            keys.push(...Object.keys(obj[k]))
        //     console.log(Object.keys(obj[k]))
        }else keys.push(key)
        // return keys
    })
    }
    // console.log(keys)
    // console.log(findKeys(obj))
    findKeys(obj)
    return keys
    
}
// console.log(findPath({a:{b:{c:1}}}, 'c'))

function AddSeparator(num){
    let numStr = String(num)
    if(numStr.length <= 3) return num

    let div = '1'
    let result = ''
    let temp = ''
    let final 
    // function addComa(num){
        div = div.padEnd(numStr.length-1, '0')
        result = String(num/Number(div)).replace('.', ',')
        temp = result.split(',')
        // console.log(temp)
        // final =  result + temp[0]
        final = AddSeparator(Number(temp[1]))
        // return result
    // }
    // addComa(num)
    console.log(temp, result)
    // return final
}
console.log(AddSeparator(12345678910010))
/*
function AddSeparator(num){
    let numStr = String(num)
    if(numStr.length <= 3) return num

    let div = '1'
    let str = ''
    let result = []

    div = div.padEnd(numStr.length-1, '0')
    str = String(num/ Number(div)).replace('.', ',')
    str = str.split(',')
    result.push(str[0])

    if(str[1].length > 3) AddSeparator(Number(str[1]))
    console.log(result)
    // return result.join(',') + numStr.slice(-3)
}
console.log(AddSeparator(12345678910))*/