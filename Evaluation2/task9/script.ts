export function objDifference(obj1: {[key: string]: number}, obj2: {[key: string]: unknown}){
    if(typeof obj1 !== 'object' || Array.isArray(obj1) || obj1 === null || 
    typeof obj2 !== 'object' || Array.isArray(obj2) || obj2 === null) return 'invalid input'

    let keysA: string[] = Object.keys(obj1)
    let keysB: string[] = Object.keys(obj2)
    let obj: {[key: string]: unknown[]} = {
        changed: [],
        added: [],
        removed: []
    }

    keysA.forEach((key,i) =>{
        if(keysB.includes(key) && obj1[key] !== obj2[key]){
            obj.changed.push({[key]: [obj1[key], obj2[key]]}) 
        }
        if(!keysB.includes(key)){
            obj.removed.push(key)
        }
    })
    keysB.forEach(key => {
        if(!keysA.includes(key)){
            obj.added.push({[key]: obj2[key]})
        }
    })
    return obj
}
// console.log(objDifference({ x:1, y:2, z:3 },{ x:1, y:4, w:5 }))