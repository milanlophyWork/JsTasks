export function sumOfUniqueNum(arr: number[]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let myObj:{[key: string]: number} = {}
    for(let num of arr){
        if(typeof num !== 'number' || isNaN(num)) return 'invalid input'
        if(!myObj[num]) myObj[num] = 0
        myObj[num]++
    }

    let sum = 0
    Object.keys(myObj).forEach(key=> {
        if(myObj[key] === 1) sum += Number(key)
    })
    return sum
}
// console.log(sumOfUniqueNum([1,2,3,2]))