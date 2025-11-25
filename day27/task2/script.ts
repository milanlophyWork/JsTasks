export function frequentItem(arr:number[]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let obj: {[key:string]: number} = {}
    for(let item of arr){
        if(typeof item !== 'number') return 'invalid input'
        
        if(!obj[item]) obj[item] = 0
        obj[item]++
    }

    let freq:number = Math.max(...Object.values(obj))
    for(let key of Object.keys(obj)){
        if(obj[key] === freq) return Number(key)
    }
}
console.log(frequentItem([1,2,3,4,5,6,7,8,9]))