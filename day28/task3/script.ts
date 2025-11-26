interface obj {
    key: string,
    value: unknown
}

export function toSingleObj(arr: obj[]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let myObj:{[key: string]: unknown} = {}
    for(let ob of arr){
        if(typeof ob !== 'object' || Array.isArray(ob) || ob === null) return 'invalid input'
        if(!ob.key || !ob.value || typeof ob.key === 'object' || typeof ob.key === 'boolean') return 'invalid input'
        
        myObj[ob.key] = ob.value
    }
    return myObj
}
console.log(toSingleObj([{key:'a', value: 1}, {key: 'b', value: 2}]))