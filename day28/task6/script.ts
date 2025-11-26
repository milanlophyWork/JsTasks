export function commonKeys(obj1: {[key: string]: unknown}, obj2: {[key: string]: unknown}){
    if(typeof obj1 !== 'object' || Array.isArray(obj1) || obj1 === null || 
    typeof obj2 !== 'object' || Array.isArray(obj2) || obj2 === null) return 'invalid input'
    
    let common: string[] = []
    Object.keys(obj1).forEach(k1 => {
        Object.keys(obj2).forEach(k2 => {
            if(k1 === k2) common.push(k1)
        })
    })
    return common
}
// console.log(commonKeys({name: 'Brad', age: 25}, {name: 'Titan', place: 'mars'}))