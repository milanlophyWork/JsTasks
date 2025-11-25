export function deepEqual(a: {[key: string]: unknown},b: {[key: string]: unknown}){
    if(a===b) return true
    if(typeof a !== typeof b || a === null || b === null) return false
    if(a === null && b === null) return true

    if(Array.isArray(a)){
        if(!Array.isArray(b)) return false

        if(a.length !== b.length) return false

        for(let i=0 ; i<a.length; i++){
            if(deepEqual(a[i], b[i]) === false) return false
        }
        return true
    }

    let keysA = Object.keys(a)
    let keysB = Object.keys(b)

    if(keysA.length !== keysB.length) return false
    for(let key of keysA){
        if(!b.hasOwnProperty(key)) return false
        if(typeof a[key] !== 'object'){
            if(deepEqual(a[key], b[key]) === false) return false
        }else if(typeof a[key] === 'object'){
            if(Array.isArray(a[key]) || a[key] === null){
                if(deepEqual(a[key], b[key])=== false) return false
            }else {
                if(deepEqual(a[key], b[key]) === false) return false
            }
        }

        return true
    }

    return false
}
console.log(deepEqual({a: 1, b:{c:2}}, {a:1, b:{c:3}}))
console.log(deepEqual({b: [1]}, {b:[2]}))