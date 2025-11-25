export function toQueryStr(obj: {[key: string]: unknown}){
    if(typeof obj !== 'object' || Array.isArray(obj) || obj === null) return 'invalid input'

    let keys:string[] = Object.keys(obj)

    let newStr:string = ''
    keys.forEach(key =>{
        if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) newStr = toQueryStr(obj[key])

        newStr += `${key}=${obj[key]}&`
    })
    return newStr.slice(0,-1)
}
// console.log(toQueryStr({'hi': [1,2,3]}) === 'hi=1,2,3')
// console.log(toQueryStr({name: {first: 'John', last: 'Cruise'}}))

// let obj = {name: {first: 'John', last: 'Cruise'}} // name=first='John&last=Cruise
// let obj2 ={'a': [1,2,3]} // a=1,2,3