
function getValueByPath<T extends Record <string, unknown>>(obj: T, path: string){
    let keysArr:string[] = []

    function findKeys(obj: T){
        if(typeof obj === 'object' && !Array.isArray(obj) || obj !== null){
            let key = Object.keys(obj)
            keysArr.push(...key)
            key.forEach(k => {
                if(typeof obj[k] === 'object' && !Array.isArray(obj[k]) || obj[k] !== null ) {
                    findKeys(obj[k])
                }
            })
        }
    }
    findKeys(obj)
    for(let k of keysArr){
        if(path === k) return obj[k]
    }
    for(let j = 0; j<keysArr.length; j++){
        for(let k=j+1; k<keysArr.length; k++){
            if(keysArr[j] + keysArr[k] === path) return obj[keysArr[k]]
        }
    }

}

console.log(getValueByPath({a: {b: {c: 42}}},'a'))