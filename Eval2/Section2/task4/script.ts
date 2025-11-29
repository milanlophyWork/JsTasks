function flattenObj(obj: {[key: string]: number}){
    if(typeof obj !== 'object' || Array.isArray(obj) || obj === null) return 'invalid input'

    let keys = Object.keys(obj)

    let myKeys: {[key: string]: number|object} = []

    keys.forEach(key => {
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
            // console.log((obj[key]))
            flattenObj(obj[key])
        }
        else myKeys.push({'k': key, 'v': obj[key]})

    })
    return  myKeys
}
console.log(flattenObj({a: {b:{c:1}}, d:2}))