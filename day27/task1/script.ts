export function removeDuplicates(arr: number[]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let obj: {[key: string] : number} = {}
    let newArr: number[] = []
    for(let item of arr){
        if(typeof item !== 'number' || isNaN(item)) return 'invalid input'
        if(!obj[item]){
            obj[item] = 0
        }
        obj[item]++
    }
    Object.keys(obj).forEach(key => {
        newArr.push(Number(key))
    })
    return newArr
}
// console.log(removeDuplicates([1,2,4,2,3]))