export function mergeDuplicateIDs(arr: {id: number, value: number}[]){
    if(!Array.isArray(arr) || arr.length === 0) return 'invalid input'

    let myObj: {[key: string]: number} = {}
    let newArr: {id: number, value: number}[] = []

    for(let obj of arr){
        if(typeof obj !== 'object' || Array.isArray(obj) || obj === null) return 'invalid input'
        if(!obj.id || !obj.value) return 'invalid input'

        if(!myObj[obj.id]) myObj[obj.id] = obj.value
        else myObj[obj.id] = myObj[obj.id] + obj.value

    }
    Object.keys(myObj).forEach(key =>{
        newArr.push({id: Number(key), value: myObj[key]})
    })

    return newArr
}
// console.log(mergeDuplicateIDs([{id: 1, value: 10}, {id:2, value: 20},{id:1, value: 15}]))